import Link from "next/link";
import AdminLinks from "./AdminLinks";
import { Ticket } from "lucide-react";

export default function AdminNavigationSidebar() {
    return (
        <div className="ps-4 py-6">
            <Link
                href={"/"}
                className="flex gap-2 items-center space-x-3 rtl:space-x-reverse pb-2 border-b border-gray/40 text-black text-3xl font-bold whitespace-nowrap "
            >
                 <Ticket className="rotate-45"/> Cinemagic
            </Link>

            <AdminLinks/>
           
        </div>
    )
}