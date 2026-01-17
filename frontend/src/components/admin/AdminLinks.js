"use client";

import { Clock, Film, LogOut, MonitorCog, TicketCheck, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = {
    Dashboard: {
        icon: <MonitorCog size={18} />,
        link: ""
    },
    "List Users": {
        icon: <Users size={18} />,
        link: "/users"
    },
    "List Movies": {
        icon: <Film size={18} />,
        link: "/movies"
    },
    "Show Timings": {
        icon: <Clock size={18} />,
        link: "/show-timing"
    },
    "List Reservations": {
        icon: <TicketCheck size={18} />,
        link: "/reservations"
    }
}

export default function AdminLinks() {
    const path = usePathname();
    return (
        <ul className="my-6 space-y-4">
            {
                Object.entries(navigations).map(([key, value]) => {
                    const fullPath = `/admin${value.link}`;
                    const active = fullPath === path;
                    return (
                        <li key={key} className={`${active ? 'bg-blue text-white' : 'bg-transparent'} hover:bg-blue hover:text-white ps-4 py-2 rounded-s-md`}>
                            <Link href={fullPath} className="capitalize text-lg flex gap-2 items-center">{value.icon}{key}</Link>
                        </li>
                    )
                }

                )
            }
            <li className="hover:bg-blue hover:text-white p-2 rounded-s-md text-lg flex gap-2 items-center">
                <LogOut size={18} />Logout
            </li>
        </ul>
    )
}