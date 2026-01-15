import express from 'express';
import {
    sendOTP,
    verifyOTP
} from "../controllers/auth.controller.js"
const router = express();

router.route('/otp').post(sendOTP)
router.route('/otp/verify').post(verifyOTP);

export default router;