"use client";

import UserAccountTabs from "@/components/user_account/UserAccountTabs";
import { selectUser } from "@/lib/features/auth/authSlice";
import { useSelector } from "react-redux";

export default function Profile(){
    const auth = useSelector(selectUser);
    console.log('profile',auth);
    return(
        <>
        <div className="h-80 bg-dyellow flex items-center justify-center">
            <h1 className="text-blue text-5xl font-extrabold">User Account</h1>
        </div>
        <div className=" lg:max-w-7xl mx-auto pt-10">
        <UserAccountTabs/>
        </div>
        <p className="text-white">{auth.user?._id}</p>
        </>
    )
}