"use client";

import { selectUser } from "@/lib/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
    const {user,isAuthticated, loading} = useSelector(selectUser);
    console.log(user)

    if (loading) {
  return null;
}
    return (
        <nav className={` z-999 fixed w-full px-4 lg:px-0 top-0 start-0 bg-blue/80 backdrop-blur-md 
      }`}>
            <div className="max-w-350 flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href={"/"}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/ticketlogo.png"
                        alt="app logo"
                        width={30}
                        height={30}
                    />
                    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
                        Cinemagic
                    </span>
                </Link>
              
                    <ul className="flex gap-6">
                        <li>
                            <Link
                                href={'/'}
                                className="font-semibold hover:underline hover:underline-offset-4 cursor-pointer block py-2 px-3 text-black md:text-white "
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={isAuthticated ? "/account" : "/login"}
                                className="font-semibold hover:underline hover:underline-offset-4 cursor-pointer block py-2 px-3 text-black md:text-white "
                            >
                                {isAuthticated ? 'Account' : 'Login/Signup'}
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}