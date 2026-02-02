import { NextResponse } from "next/server";
import axiosInstance from "./lib/axios/axiosInstance";

export async function middleware(request){
    console.log("request");
    const token = request.cookies.get("cinemagic.token")?.value;
    console.log(token);

    const {pathname} = request.nextUrl;

    const isProtected = pathname.startsWith('/admin');

    if(isProtected && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // const response = await axiosInstance.get(`${process.env.API_BACKEND_DEV}/api/auth/v1/verify/me`,{
    //     headers: {
    //   'Cookie': `cinemagic.token=${token}`
    // }
    // });
    // console.log('check auth fr',response);

    // if(!response.success || response.data.user.role === 'user'){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/admin/:path*"
    ]
}