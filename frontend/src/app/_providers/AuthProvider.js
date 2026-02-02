"use client";

import axiosInstance from "@/lib/axios/axiosInstance";
import { clearUser, setUser } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthProvider({children}){
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUser = async () => {
            try{
                const res = await axiosInstance(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/auth/v1/verify/me`,{
                    withCredentials: true
                });
                console.log(res);
            if(res.success){
                console.log("authprovider user", res.data.user)
                dispatch(setUser(res.data.user))
            }else{
                dispatch(clearUser())
            }
            }catch(err){
                dispatch(clearUser())
            }
            
        }
        loadUser();
    },[]);
    return children;
}