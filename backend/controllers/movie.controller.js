import asyncHandler from "../utils/asyncHandler.js";
import Movie from "../model/movies.model.js";
import AppError from "../utils/AppError.js";
import sendResponse from "../utils/sendResponse.js";
import axios from 'axios';
import getMovieDetailsAndCredits from "../utils/getMovieDetailsAndCredits.js"

const tmdb_base = process.env.TMDB_BASEURL;
const tmdb_apikey = process.env.TMDB_APIKEY;

export const getTopFiveMovies = asyncHandler(async (req, res) => {
    let topFiveMovies = [];
    const url = `${tmdb_base}/now_playing?api_key=${tmdb_apikey}`;
    const response = await axios.get(url);
    // console.log(response.data);
    if(response.data.results.length === 0){
        throw new AppError(404, "No movies found:(");
    }
    const topFive = response.data.results.slice(0,5);

    for(let movie of topFive){
        let id = movie.id;
        const {d,c} = await getMovieDetailsAndCredits(id);
      
        const combine = {...movie, movieDetails: d, movieCredits: {
            cast: c.cast.slice(0,5),
            crew: c.crew.slice(0,5)
        }}

        topFiveMovies.push(combine)
    }

    sendResponse(res, 200, topFiveMovies, "trending movies fetched:)")
})

export const getMovieDetailsById = asyncHandler(async (req,res) => {
    console.log(req.query);
    const {id} = req.query
    if(!id){
        throw new AppError(404, "missing movie id:(");
    }
    const {d,c,v,r} = await getMovieDetailsAndCredits(id, true);

     sendResponse(res, 200, {
        details: d, 
        credits: {
            cast: c.cast,
            crew: c.crew
        },
        videos: v,
        reviews: r

    }, "top five movies fetched:)")
});


export const getTrendingMovies = asyncHandler(async (req, res) => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdb_apikey}`;
    const response = await axios.get(url);

    if(response.data.results.length === 0){
        throw new AppError(404, "No movies found:(");
    }

    const results = response.data.results.slice(0,30);

    sendResponse(res, 200, results, "trending movies fetched:)")
})

export const getUpcomingMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({
        released: { $gt: new Date() }
    }).select("title poster rated").sort({ released: 1 }).limit(10).lean();

    if (!movies.length) throw new AppError(404, "No upcoming movies found:(");

    res.set('Cache-Control', 'public, max-age=3600');
    sendResponse(res, 200, movies, "upcoming movies fetched:)")
});

