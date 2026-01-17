import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function CustomCarousel({ movies }) {
    return (
        <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
                {movies.map((movie, index) => (
                    <CarouselItem key={movie._id} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <div className="p-1">
                            <Card className="bg-transparent p-0 overflow-hidden">
                                <CardContent className="p-0">
                                    {
                                        movie.poster ?
                                        <Image
                                        src={movie.poster}
                                        width={300}
                                        height={100}
                                    />
                                    :
                                    <div className="h-85.5 bg-gray-100">image</div>
                                    }
                                    
                                    <h1 className="my-2 text-white text-md md:text-lg font-semibold">
                                        {movie.title}
                                    </h1>
                                    <div className="flex text-white justify-between">
                                        <div className="flex text-sm md:text-lg gap-1 items-center">
                                            <Star className="text-dyellow" />
                                            8.5/10
                                        </div>
                                        <div className="text-sm md:text-lg">98k Votes</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}