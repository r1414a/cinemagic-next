import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ProfileTabContent from "./ProfileTabContent"

export default function UserAccountTabs() {
    return (
        <Tabs defaultValue="profile">
            <div className="flex justify-center"> 
            <TabsList variant="line">
                <TabsTrigger value="profile" className="text-white data-[state=active]:text-dyellow data-[state=active]:border-b-2 data-[state=active]:border-b-dyellow rounded-none hover:text-dyellow text-lg px-4 h-12">Profile</TabsTrigger>
                <TabsTrigger value="favorites" className="text-white data-[state=active]:text-dyellow data-[state=active]:border-b-2 data-[state=active]:border-b-dyellow rounded-none hover:text-dyellow text-lg px-4 h-12">Favorites</TabsTrigger>
                {/* <TabsTrigger value="reports" className="text-white data-[state=active]:text-dyellow data-[state=active]:border-b-2 data-[state=active]:border-b-dyellow rounded-none">Reports</TabsTrigger> */}
            </TabsList>
            </div>
            <TabsContent value="profile">
                <ProfileTabContent/>
            </TabsContent>
            <TabsContent value="favorites">
                <h1 className="text-white">FAVORITES</h1>
            </TabsContent>
        </Tabs>
    )
}