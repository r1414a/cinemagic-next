"use client";

import { useMemo } from "react"

export default function ShowDirector({crew}){
    const director = useMemo(() => {
        return crew.find(c => c.job === "Director")
    },[crew])
    return(
        <div>
                  <p key={director?.id} className=" text-white">
                    <span className="text-dyellow font-semibold me-2">
                      Director:
                    </span>
                    {director?.name || "John Deo"}
                  </p>
            </div>
    )
}