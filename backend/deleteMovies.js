import Comment from "./model/comments.model.js"
import Movie from "./model/movies.model.js";

export const deleteMovies = async() => {
    try{
        const result = await Movie.deleteMany({
      released: {$lte: new Date("2015-12-23T00:00:00Z")}
    });

    // const result = await Movie.deleteMany({
    //     year: { $nin: [2015]}
    // })

    console.log("Deleted count:", result.deletedCount);
    }catch(err){
        console.log(err);
    }
}

