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
  {
    name: "Rohit Mehta",
    email: "rohit.mehta@gmail.com",
    mobile: "9827662354",
    profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
    role: "user",
  },
]

export default function ShowUserTable() {
  return <DataTable columns={columns} data={users} />
}
