import express from 'express';
import{
getMovieDetailsById,getTopFiveMovies,getTrendingMovies,getUpcomingMovies
} from "../controllers/movie.controller.js"
const router = express();

router.route("/now-playing").get(getTopFiveMovies);
router.route("/details").get(getMovieDetailsById);
router.route("/trending").get(getTrendingMovies);
router.route("/upcoming").get(getUpcomingMovies);

export default router;