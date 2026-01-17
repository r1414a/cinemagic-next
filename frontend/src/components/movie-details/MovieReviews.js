"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"
import CarouselNavigationButton from "../carousel/CarouselNavigationButton";
import FiveStars from "../movie-related/FiveStars";
import MainHeading from "../MainHeading";

export default function MovieReviews({reviews}){
      const prevReviewRef = useRef();
  const nextReviewRef = useRef();
    return(
        <section className="bg-blue w-full min-h-150 pb-20">
        <div className="max-w-7xl mx-auto h-full px-4">
          <div className="flex justify-between items-center">
            <MainHeading text={"Reviews"} />
            <div className="space-x-4">
              <CarouselNavigationButton
                pref={prevReviewRef}
                nref={nextReviewRef}
              />
            </div>
          </div>

          {reviews.length === 0 ? (
            <p className="text-white text-lg text-center">No reviews</p>
          ) : (
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoHeight={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevReviewRef.current;
                swiper.params.navigation.nextEl = nextReviewRef.current;
              }}
              navigation={{
                prevEl: prevReviewRef.current,
                nextEl: nextReviewRef.current,
              }}
              modules={[EffectFade, Navigation]}
              className="mySwiper"
            >
              {reviews.map((review) => (
                <SwiperSlide>
                  <div className="bg-blue space-y-4 h-fit">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-dyellow text-2xl">
                          {review.author_details.name ||
                            review.author_details.username}
                        </h2>
                      </div>
                      <div className="flex gap-2">
                        <FiveStars rating={review.author_details.rating} />
                      </div>
                    </div>
                    <div>
                      <p className="text-white ">{review.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    )
}