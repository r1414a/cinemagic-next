import MovieReviews from "@/components/movie-details/MovieReviews";
import MovieTrailer from "@/components/movie-details/MovieTrailer";
import ShowCastAndCrewCarousel from "@/components/movie-details/ShowCastAndCrewCarousel";
import axiosInstance from "@/lib/axios/axiosInstance";
import Image from "next/image";

export default async function SingleMoviePage({ params }) {
    const { id } = await params;
    // console.log("single movie page: ", id);
    try {
        const res = await axiosInstance.get(`${process.env.API_BACKEND_DEV}/api/movies/v1/details?id=${id}`);
        const { details, credits, videos, reviews } = res.data;
        // console.log(data);


        return (
            <section>
                <div className="absolute inset-0 z-0">
                    <Image
                        src={`${process.env.TMDB_IMAGE_BASEURL
                            }/original${details.backdrop_path})`}
                        fill
                        priority
                        className="object-cover"
                        alt="Movie poster"
                    />
                </div>

                <div className="absolute inset-0 z-10 bg-radial-[at_50%_80%] md:bg-radial-[at_50%_50%] from-transparent to-black to-70% opacity-[0.9] lg:opacity-[0.7] "></div>
                <div className="relative w-full z-20 mt-80">
                    <div className="max-w-7xl mx-auto px-8">
                        <h1 className="max-w-xl text-white text-4xl md:text-6xl font-semibold">
                            {details.original_title}
                        </h1>
                        <p className="max-w-xl my-4 md:my-8 text-sm md:text-lg text-white">{details.overview}</p>
                        {/* {(notShowBookButton || state.type === "trending" || state.type === "comingsoon") ? null : <BookTicketButton id={details.id} />} */}
                    </div>
                </div>

                <ShowCastAndCrewCarousel credits={credits}/>

                 <div className="bg-blue h-64 md:h-125"></div>

                 <MovieTrailer details={details} credits={credits} videos={videos.results}/>

                 <MovieReviews reviews={reviews.results}/>
            </section>
        )

    } catch (err) {
        console.log(err);
        return <div className="text-white">Failed to load movie details.</div>
    }

}