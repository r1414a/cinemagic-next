import axiosInstance from "@/lib/axios/axiosInstance";
import CustomCarousel from "../carousel/CustomCarousel";

export default async function MoviesCarousel() {
    try {
        const res = await axiosInstance.get(`${process.env.API_BACKEND_DEV}/api/movies/v1/upcoming`)
        const upcoming = res.data;
        // console.log(upcoming);
        return (
            <section
      className={`bg-blue min-h-[90vh] lg:my-20 flex justify-center items-center`}
    >
        <div className="w-full px-4 md:px-8 xl:px-4 2xl:px-0 max-w-350 mx-auto">
                <CustomCarousel movies={upcoming}/>

        </div>
            </section>
        )
    } catch (err) {
        console.log("Error while fetching upcoming movies: ", err);
        return <div className="text-white">Failed to load upcoming movies</div>
    }
}