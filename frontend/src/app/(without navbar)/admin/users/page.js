import AdminUserHeader from "@/components/admin/users/AdminUserHeader"
import ShowUserTable from "@/components/admin/users/ShowUserTable"

export default function AdminUsers(){
    return(
        <div className="mt-32 space-y-4">
                <AdminUserHeader/>
                <ShowUserTable/>
        </div>
    )
}