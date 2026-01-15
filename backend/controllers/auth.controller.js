import OTP from "../model/otp.model.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateOTP from "../utils/generateOTP.js";
import nodemailer from "nodemailer";
import sendResponse from "../utils/sendResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import User from "../model/users.model.js";
dotenv.config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    },
});

export const sendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) throw new AppError(400, "Email is missing.")

    const now = Date.now();

    const recentOtps = await OTP.find({ email }).sort({ createdAt: -1 });

    //if otp was just send means if otp was not 60sec old
    if (recentOtps.length > 0) {
        const lastOtpTime = recentOtps[0].lastSentAt.getTime();
        if (now - lastOtpTime < 60 * 1000) {
            throw new AppError(429, "Please wait before requesting another OTP");
        }
    }

    //max 5 otp can be send in 15min
    const fifteenMinAgo = new Date(now - 15 * 60 * 1000);
    const otpCount = await OTP.countDocuments({
        email,
        createdAt: { $gte: fifteenMinAgo },
    })

    if (otpCount >= 5) {
        throw new AppError(429, "Too many OTP requests, Try later");
    }

    const randomOTP = await generateOTP();

    const newOTP = {
        email,
        otpHash: randomOTP.hash,
        createdAt: Date.now()
    }

    const mailOptions = {
        from: `"Cinemagic 🎬" <${process.env.MY_EMAIL}>`,
        to: email,
        subject: "OTP For Authentication",
        text: `Your One-Time Password is: ${randomOTP.plain}`,
        html: `<p style="font-size:18px">Your OTP is: <strong>${randomOTP.plain}</strong></p>`,
    };

    const createdOTP = new OTP(newOTP);

    await Promise.all([
        transporter.sendMail(mailOptions),
        createdOTP.save()
    ])

    sendResponse(res, 201, null, "OTP sent successfully:)")
});

export const verifyOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    let user;
    if (!email || !otp || otp.length !== 6) throw new AppError(401, "Email or OTP is missing.")

    const latestOtp = await OTP.findOne({ email }).sort({ createdAt: -1 });

     if (!latestOtp) {
    throw new AppError(400, "OTP is expired, please login again.");
  }

    if (latestOtp.attempts >= 5) {
        throw new AppError(429, "Too many failed attempts!, please login again.")
    }

    const isMatch = await bcrypt.compare(otp, latestOtp.otpHash);

    if (!isMatch) {
        await OTP.findOneAndUpdate({ email }, { $inc: { attempts: 1 } });
        throw new AppError(401, "OTP not correct, please try again!.")
    }

    await OTP.deleteMany({email})

    user = await User.findOne({ email });

    if (!user) {
        user = await User.create({
            name: "",
            email,
            role: "user"
        })
    }

    const token = jwt.sign(
        { userid: user._id, email },
        process.env.JWT_SECRET,
        { expiresIn: '2d'}
    )

    if(!token){
        throw new AppError(500, 'Failed to generate token.')
    }

    // res.cookie('cinemagic_token', token, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: 'None',
    //     maxAge: 2 * 24 * 60 * 60 * 1000
    // })

    sendResponse(res, 200, {user, token}, "Loggedin successfully:)")
})
