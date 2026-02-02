"use client";

import CarouselNavigationButton from "../carousel/CarouselNavigationButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import MainHeading from "../MainHeading";   
import Link from "next/link";
import FiveStars from "../movie-related/FiveStars";
import { Heart, Star } from "lucide-react";
import { Button } from "../ui/button";

export default function TrendingMovieCarousel({data}){
     const trendingPrevRef = useRef(null);
  const trendingNextRef = useRef(null);
    return(
        <>
        <div className="flex justify-between items-center">
          <MainHeading
            text="Trending"/>
          <div className="space-x-2 md:space-x-4">
            <CarouselNavigationButton
              pref={trendingPrevRef}
              nref={trendingNextRef}
            />
          </div>
        </div>

        <div>
          <Swiper
            modules={[Navigation]}
            // slidesPerView={6}
            // spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = trendingPrevRef.current
              swiper.params.navigation.nextEl = trendingNextRef.current
            }}
            navigation={{
              prevEl: trendingPrevRef.current,
              nextEl: trendingNextRef.current
            }}
            className="mySwiper"
          >
            {data.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <Button className="absolute left-0 bg-transparent"><Heart stroke="#FEE505"/></Button>
                  <Link href={`/movie/${movie.id}`}>
                    <img
                      className="w-full"
                      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASEURL}/w342${
                        movie.poster_path
                      }`}
                      alt="movie poster"
                      loading="lazy"
                    />
                  </Link>
                  <h1 className="my-2 text-white text-md tracking-tight font-semibold">
                    {movie.original_title}
                  </h1>
                  <div className="flex text-white justify-between">
                    <div className="flex text-sm md:text-lg gap-1 items-center">
                      <Star size={20} fill="#fee505" className="text-dyellow" />
                      {movie.vote_average.toFixed(1)}/10
                    </div>
                    {/* <FiveStars rating={movie.vote_average.toFixed(2)} /> */}
                    <div className="text-sm md:text-lg">{movie.vote_count} Votes</div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        </>
    )
}