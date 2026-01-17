
import axiosInstance from "@/lib/axios/axiosInstance";
import CarouselSwiper from "./CarouselSwiper";

export default async function HeroSection() {
    try{
        const res = await axiosInstance.get(`${process.env.API_BACKEND_DEV}/api/movies/v1/now-playing`);
        const data = res.data;
        // console.log(data);
        return (
        <section className=" h-screen">
            <CarouselSwiper data={data || []}/>
           
        </section>
    )
    }catch(err){
        console.log(err);
        return <div className="text-white">Failed to load top five movies.</div>
    }
    
} 