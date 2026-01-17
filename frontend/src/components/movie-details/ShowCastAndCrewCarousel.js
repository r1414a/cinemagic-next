"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import CarouselNavigationButton from "../carousel/CarouselNavigationButton";

export default function ShowCastAndCrewCarousel({credits}){
    const prevStarringRef = useRef();
  const nextStarringRef = useRef();

    return(
        <div className="absolute w-full max-w-7xl px-4 z-30 -bottom-35 left-1/2 -translate-x-1/2">
          <div className="flex justify-end items-center mb-4 gap-4">
            <p className="text-white font-semibold">Starring:</p>
            <CarouselNavigationButton
              pref={prevStarringRef}
              nref={nextStarringRef}
            />
          </div>
          <Swiper
            // slidesPerView={7}
            // spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevStarringRef.current;
              swiper.params.navigation.nextEl = nextStarringRef.current;
            }}
            navigation={{
              prevEl: prevStarringRef.current,
              nextEl: nextStarringRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper w-full max-w-7xl mx-auto"
          >
            {credits.cast.map((actors) => (
              <SwiperSlide className="">
                <div className="relative w-full h-60">
                  <Image
                    className="w-full rounded-sm h-full object-cover"
                    width={200}
                    height={300}
                    src={
                      actors.profile_path
                        ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASEURL}/original${
                            actors.profile_path
                          }`
                        : "/fallbackProfileImage.png"
                    }
                    alt={actors.name || "Actor"}
                  />
                  <div className="bg-blue/80 backdrop-blur-md w-full py-2 absolute bottom-0 ">
                    <h3 className="  text-center text-sm text-dyellow ">
                      {actors.name}
                    </h3>
                    <p className="text-center text-xs md:text-sm text-white">
                      {" "}
                      as{" "}
                      <span className="text-dyellow">{actors.character}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}