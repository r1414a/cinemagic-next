import { Button } from "../ui/button"

export default function ShowProfileInfo() {
    return (
        <>
            <div className="flex justify-between">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold">Rupesh Chincholar</h1>
                    <h3><b>Email: </b>rupeshchincholkar123@gmail.com</h3>
                    <h3><b>Joined On: </b> 29 Jan 2026</h3>
                </div>
                <div className="w-40 h-40 rounded-full border border-lightpurple shadow-sm shadow-white/30">

                </div>
            </div>
            <div className="border-t border-dyellow pt-4 mt-6">
                <Button className="bg-dyellow text-black hover:bg-dyellow/80">
                    Upload/Edit Picture
                </Button>
            </div>
        </>
    )
}