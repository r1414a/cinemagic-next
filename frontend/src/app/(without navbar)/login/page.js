import CustomInputGroup from "@/components/forms/CustomInputGroup";
import FormSubmitButton from "@/components/forms/FormSubmitButton";
import LoginForm from "@/components/login/LoginForm";

import Image from "next/image";


export default function Login() {
    return (
        <section className="flex flex-col md:flex-row h-screen bg-blue">
            <div
                className="relative w-full md:w-1/2 h-[35%] md:h-full rounded-b-full md:rounded-e-full md:rounded-bl-none overflow-hidden bg-blue"
            >
               <Image
                src="/authImage.jpeg"
                alt="login page background image"
                fill
                className="object-cover"
               />
            </div>

            <LoginForm/>
            

        </section>
    )
}