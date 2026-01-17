import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useActionState, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { loginVerifyOtp } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { customErrorToast, customSuccessToast } from "../ui/toast/customToast";

const initialState = {
    success: false,
    message: "",
}

export default function VerifyOTP({ email }) {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    console.log(otp);
    const [state, action, pending] = useActionState(loginVerifyOtp, initialState)

    useEffect(() => {
            if (!state.message) return
    
            if (state.success) {
                customSuccessToast(state.message)
                if(state.data.role === 'user'){
                    router.replace('/');
                }else{
                    router.replace('/admin')
                }
            } else {
                customErrorToast(state.message)
            }
        }, [state, router]);

    return (
        <>
            <h1 className="text-white text-center text-xl md:text-2xl font-bold">
                OTP Verification
            </h1>
            <p className="text-center text-white my-3">
                Enter OTP code sent on{" "} rupeshshingin@gmail.com
                <span className="font-semibold">{email}</span>
            </p>
            <form action={action} className="my-2 px-6 space-y-6">
                <input hidden name="email" value={email} readOnly/>
                <input hidden name="otp" value={otp} readOnly/>
                <InputOTP
                    maxLength={6}
                    pattern='\d*'
                    value={otp}
                    onChange={(value) => setOtp(value)}
                >
                    <InputOTPGroup className="space-x-4">
                        {
                            [...Array(6)].map((_, i) => (
                                <InputOTPSlot key={i} index={i} className="rounded-sm w-14 h-14 shadow-md border-3 border-yellow-300 text-white text-2xl" />
                            ))
                        }
                    </InputOTPGroup>
                </InputOTP>

                <button
                    type="submit"
                    disabled={pending || otp.length !== 6}
                    className="w-full flex justify-center gap-1 bg-dyellow items-center rounded-md h-10 px-4 text-blue font-medium cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                    {
                        pending ?
                            <><Spinner />Verifying...</> : 'Verify'}
                </button>
            </form>
        </>
    )
}