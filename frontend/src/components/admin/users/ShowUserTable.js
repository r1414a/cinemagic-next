import { columns } from "./column";
import { DataTable } from "./DataTable";

const users = [
  {
    name: "Anjali Joshi",
    email: "anjali.joshi@gmail.com",
    mobile: "9887766554",
    profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
    role: "admin",
  },
]

export default function ShowUserTable() {
  return <DataTable columns={columns} data={users} />
}
