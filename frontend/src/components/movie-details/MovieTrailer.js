import FiveStars from "../movie-related/FiveStars"
import MovieDuration from "../movie-related/MovieDuration"
import ShowDirector from "./ShowDirector"
import Trailer from "./Trailer"

export default function MovieTrailer({details,credits,videos}){
    console.log(credits.crew, videos)
    return(
        <div className="bg-blue w-full mb-14">
        <div className="flex flex-col justify-center min-h-[90vh] max-w-7xl mx-auto ">
          <Trailer videos={videos}/>

          <div className="flex flex-wrap gap-4 md:gap-6 px-4 justify-center mt-10">
            <div className="flex items-center">
              <span className="text-dyellow me-2">Rating:</span>
              <FiveStars rating={details.vote_average.toFixed(2)} />
            </div>

            <div>
              <p className="text-white flex items-center">
                <span className="text-dyellow me-2">Released:</span>
                {details.release_date.slice(0, 4)}
              </p>
            </div>

            <div className="flex">
              <span className="text-dyellow me-2">Duration:</span>
              <MovieDuration duration={details.runtime} />
            </div>

            <div>
              <p className="text-white">
                <span className="text-dyellow me-2">Gener(s):</span>
                {details.genres.map((item) => item.name).join(",")}
              </p>
            </div>

            <ShowDirector crew={credits.crew}/>

            <div>
              <p className="text-white">
                <span className="text-dyellow me-2">Language:</span>
                {details.original_language}
              </p>
            </div>
            <div>
              <p className="text-white">
                <span className="text-dyellow me-2">Country:</span>
                {details.origin_country.join(",")}
              </p>
            </div>
          </div>

          {/* {(notShowBookButton || state.type === "trending" || state.type === "comingsoon") ? null : (
            <div className="mt-10 text-center">
              <BookTicketButton id={details[0].id} />
            </div>
          )} */}
        </div>
      </div>
    )
}