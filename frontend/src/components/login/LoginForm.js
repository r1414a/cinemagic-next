"use client";

import CustomInputGroup from "../forms/CustomInputGroup";
import Link from "next/link";
import { Mail, MoveLeft } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { loginSendOtp } from "@/app/actions/auth";
import { Spinner } from "../ui/spinner";
import { customErrorToast, customSuccessToast } from "../ui/toast/customToast";
import { useRouter } from "next/navigation";
import VerifyOTP from "./VerifyOTP";

const initialState = {
    success: false,
    message: "",
    email: ""
}

export default function LoginForm() {
    const router = useRouter();
    const [showNext, setShowNext] = useState(false);
    const [email, setEmail] = useState("");
    const [state, action, pending] = useActionState(loginSendOtp, initialState);
    console.log(state);

    useEffect(() => {
        if (!state.message) return

        if (state.success) {
            customSuccessToast(state.message)
            setShowNext(true);
        } else {
            customErrorToast(state.message)
        }
    }, [state, router]);

    return (
        <div className="relative w-full flex flex-col justify-center items-center md:w-1/2 h-[65%] md:h-full bg-blue max-w-sm mx-auto">
            {
                showNext
                ?
                <button onClick={() => setShowNext(false)} className="absolute -left-56 top-10 flex gap-1 bg-dyellow items-center rounded-md h-9 px-4 text-blue font-medium cursor-pointer text-sm">
                    <MoveLeft size={18} />
                    Login
                </button>
                :
                <Link href={"/"} className={"absolute -left-56 top-10"}>
                <button className="flex gap-1 bg-dyellow items-center rounded-md h-9 px-4 text-blue font-medium cursor-pointer text-sm">
                    <MoveLeft size={18} />
                    Home
                </button>
            </Link>
            }
            

            <div className="mb-8 md:mb-12 flex gap-2 justify-center items-center">
                <img src="/ticketlogo.png" alt="website logo" className="w-8" />
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
                    Cinemagic
                </h1>
            </div>

            {
                showNext
                    ?
                    <VerifyOTP email={email}/>  
                    :
                     <>
                        <form action={action} className="mb-10 w-sm">
                            <div className="relative mb-6">
                                <CustomInputGroup
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    icon={<Mail />}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                />

                            </div>

                            <button type="submit"
                                disabled={pending || !email.trim()}
                                className="w-full flex justify-center gap-1 bg-dyellow items-center rounded-md h-10 px-4 text-blue font-medium cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                {
                                    pending ?
                                        <><Spinner />Please wait...</> : 'Continue'}
                            </button>
                            {/* <FormSubmitButton
                    loading={false}
                    whileLoadingText={'Please wait...'}
                    text={'Continue'}
                    /> */}

                        </form>

                        <div className="my-2 w-full flex items-center gap-2">
                            <div className="h-0.5 w-1/2 bg-white"></div>
                            <p className="text-white font-semibold text-sm">OR</p>
                            <div className="h-0.5 w-1/2 bg-white"></div>
                        </div>

                        <div className="w-full mt-4">
                            {/* <GoogleAuth /> */}
                            google auth
                        </div>

                    </>
                    
            }


        </div>
    )
}