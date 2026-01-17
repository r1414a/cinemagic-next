"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import MovieDuration from "../movie-related/MovieDuration";
import FiveStars from "../movie-related/FiveStars";
import Link from "next/link";
import ShowCrewCast from "./ShowCrewCast";

export default function CarouselSwiper({data}){
    // console.log(data);
    return(
         <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-full"
            >
                {data.map((movie) => {
                    const details = movie.movieDetails;
                    return (
                         <SwiperSlide
                            className="relative h-screen w-screen"
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASEURL
                                    }/original${details.backdrop_path})`}
                                fill
                                priority
                className="object-cover"
                                alt="Movie poster"
                            />
                            </div>
                            
                            <div className="absolute inset-0 z-10 bg-radial-[at_50%_80%] md:bg-radial-[at_50%_50%] from-transparent to-black to-70% opacity-[0.9] lg:opacity-[0.7] "></div>
                            <div className=" relative z-30 w-full h-full">
                                <div className="w-full h-full max-w-7xl mx-auto px-8 md:px-8 xl:px-4  pb-24 md:pb-26 lg:pb-20 xl:pb-24 2xl:pb-20 flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-0 justify-end md:justify-between md:items-end">
                                    <div className="md:w-[60%] space-y-3 lg:space-y-4">
                                        <h1 className="max-w-xl text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
                                            {details.original_title}
                                        </h1>
                                        <div className="flex flex-wrap gap-2 md:gap-4">
                                            <div>
                                                <p className="text-md text-white">
                                                    {details.genres.map((item) => item.name).join(",")}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-white flex gap-2 items-center">
                                                    <Calendar className="text-dyellow" />
                                                    {details.release_date.slice(0, 4)}
                                                </p>
                                            </div>
                                            <div>
                                                <MovieDuration duration={details.runtime} />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 text-white">
                                            <div className="flex items-center">
                                                <FiveStars rating={details.vote_average.toFixed(2)} />
                                            </div>
                                            <div>{details.vote_count} Votes</div>
                                        </div>
                                        <div className="space-x-4 mt-8">
                                            {/* <BookTicketButton id={movie.id} /> */}
                                            <Link
                                                href={`/movie/${movie.id}`}
                                                className="py-3 px-10 rounded-sm font-semibold border-2 border-dyellow text-dyellow"
                                            >
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:w-[40%] flex flex-col space-y-1 md:space-y-3">
                                        <ShowCrewCast creditData={movie.movieCredits} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                       
                    })}
            </Swiper>
    )
}