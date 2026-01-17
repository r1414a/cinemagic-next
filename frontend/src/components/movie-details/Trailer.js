"use client";

import { useMemo } from "react"

export default function Trailer({ videos }) {
    const trailer_video = useMemo(() => {
        return videos.find(
            (video) => video.name === "Official Trailer" || video.type === "Trailer"
        )
    }
        , [videos])
    return (
        <div className="max-w-4xl mx-auto px-8">
            <iframe
                width="100%"
                className="h-125 aspect-video border-0"
                src={`https://www.youtube.com/embed/${trailer_video?.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}