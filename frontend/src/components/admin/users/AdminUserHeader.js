import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function AdminUserHeader() {
    return (
        <div className="flex justify-between">
            <div className="basis-1/2">
                <Input
                    placeholder="Filter users..."
                    className="max-w-xs"
                />
            </div>
            <div className="basis-1/2 text-end">
                <Button className="bg-dyellow text-black"><Plus size={18}/>Add user</Button>
            </div>
        </div>
    )
}