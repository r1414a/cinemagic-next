export default function ShowCrewCast({creditData}){
    return(
        <>
         <p className="text-lg lg:text-xl text-white">
        <span className="text-dyellow font-semibold me-2">Director:</span>
        {creditData.crew.map((crew) =>
            crew.job === "Director" ? crew.name + "," : null
          )}
      </p>

      <p className="text-md lg:text-lg text-white">
        <span className="text-dyellow font-semibold me-2">Stars:</span>
        {creditData.cast.map((cast) => cast.name)
            .join(",")}
      </p></>
    )
}