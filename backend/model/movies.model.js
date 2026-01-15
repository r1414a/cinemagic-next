import mongoose from "mongoose";
import { movieRated } from "../constants/constants.js";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    poster: {
        type: String,
    },
    plot: {
        type: String,
        required: true
    },
    fullplot: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true,
        min: 1
    },
    year: {
        type: Number,
        required: true,
        index: true 
    },
    genres: {
        type: [String],
        required: true,
        index: true 
    },
    cast: {
        type: [String],
        required: true
    },
    directors: {
        type: [String],
        required: true
    },
    writers: {
        type: [String],
        required: true
    },
    rated: {
        type: String,
        enum: {
            values: movieRated,
            message: '{VALUE} is not a supported.'
        },
        required: true 
    },
    languages: {
        type: [String],
        required: true
    },
    released: {
        type: Date,
        required: true
    },
    awards: {
        wins: {type: Number, default: 0},
        nominations: {type: Number, default: 0},
        text: {type: String}
    },
    type: {
        type: String,
        enum: ["movie", "series"],
        required: true,
        index: true 
    },
    countries: {
        type: [String],
        required: true
    },
    tomatoes: {
        viewer: {
            rating: {type: Number}
        },
    },
    imdb: {
        rating: {
            type: Number,
            min: 0,
            max: 10,
        },
        votes: {type: Number},
        id: {type: Number}
    }

},
{
    timestamps: true
})


movieSchema.index(
    {title: "text", plot: "text"},
    {weights: {title: 5, plot: 2}, name: "MovieTextIndex"}
)

const Movie = mongoose.model("Movie", movieSchema)

export default Movie;