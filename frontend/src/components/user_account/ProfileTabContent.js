import EditProfileInfoForm from "./EditProfileInfoForm"
import ShowProfileInfo from "./ShowProfileInfo"

export default function ProfileTabContent(){
    return(
        <div className="w-full flex gap-4 justify-center p-8">
            <div className="basis-1/2 border border-lightpurple p-6 rounded-md shadow-sm shadow-white/30">
                    <ShowProfileInfo/>
            </div>
            <div className="basis-1/2 border border-lightpurple p-6 rounded-md shadow-sm shadow-white/30">
                    <EditProfileInfoForm/>
            </div>
        </div>
    )
}