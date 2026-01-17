import axiosInstance from "@/lib/axios/axiosInstance";
import TrendingMovieCarousel from "./TrendingMovieCarousel";

export default async function Trending() {
    try {
        const res = await axiosInstance.get(`${process.env.API_BACKEND_DEV}/api/movies/v1/trending`)
        const trending = res.data;

        return (
            <section
                className={`bg-blue min-h-[90vh] lg:my-20 flex justify-center items-center`}
            >
                <div className="w-full px-4 md:px-8 xl:px-4 2xl:px-0 lg:max-w-7xl mx-auto">
                            <TrendingMovieCarousel data={trending || []}/>
                </div>
            </section>
        )
    } catch (err) {
        console.log("Error while fetching upcoming movies: ", err);
        return <div className="text-white">Failed to load upcoming movies</div>
    }

}