import AdminNavigationSidebar from "@/components/admin/AdminNavigationSidebar"

export default function AdminLayout({children}){
    return(
        <main className="flex">
            <section className="basis-[20%] min-h-screen bg-dyellow">
                <AdminNavigationSidebar/>
            </section>
            <section className="basis-full px-10">
            {children}
            </section>
        </main>
    )
}