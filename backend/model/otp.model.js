import mongoose, { Schema } from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    otpHash:{
        type: String,
        required: true
    },
    purpose: {
      type: String,
      enum: ["login", "signup", "password_reset"],
    //   required: true
    },
    attempts: {
        type: Number,
        default: 0,
        max: 5
    },
    lastSentAt:{
        type: Date,
        default: Date.now,
    },
    createdAt:{
        type: Date,
        expires: 120,
        default: Date.now
        //TTL index auto-remove document after expiry
    }
},{
    timestamps: false
});


const OTP = mongoose.model('OTP', otpSchema);

export default OTP;