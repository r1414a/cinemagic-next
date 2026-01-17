"use server";

import axiosInstance from "@/lib/axios/axiosInstance"
import { cookies } from "next/headers";

//to send otp
export async function loginSendOtp(prevState, formData) {
    try {
        const email = formData.get('email');
        if (!email.trim()) {
            return {
                success: false,
                message: "Email is required",
            };
        }
        // console.log(email);
        const res = await axiosInstance.post("/api/auth/v1/otp",
            { email },
        )
        return {
            success: true,
            message: res.message
        }
    } catch (err) {
        console.log("Error while sending OTP: ", err);
        return {
            success: false,
            message: err.message || "Failed to send OTP"
        }
    }

}

//to verify otp
export async function loginVerifyOtp(prevState, formData) {
    try {
        const otp = formData.get('otp');
        const email = formData.get('email')
        if (!otp.trim() || otp.length !== 6 || !email.trim()) {
            return {
                success: false,
                message: "OTP or Email is missing",
            };
        }
        const res = await axiosInstance.post("/api/auth/v1/otp/verify",
            { email, otp },
        )
        
        const cookieStore = await cookies();

        cookieStore.set("cinemagic.token", res.data.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 2 * 24 * 60 * 60 * 1000
        })

        return {
            success: true,
            message: res.message,
            data: res.data.user
        }
    } catch (err) {
        console.log("Error while verifying OTP: ", err);
        return {
            success: false,
            message: err.message || "OTP verification failed"
        }
    }

}