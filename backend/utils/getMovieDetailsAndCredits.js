import axios from "axios";

const tmdb_base = process.env.TMDB_BASEURL;
const tmdb_apikey = process.env.TMDB_APIKEY;

export default async function getMovieDetailsAndCredits(id, getVideosAndReviews = false) {
    try {
        if (!id) {
            throw new Error("ID not present to get details.")
        }

        const requests = [
            axios.get(`${tmdb_base}/${id}?api_key=${tmdb_apikey}`),
            axios.get(`${tmdb_base}/${id}/credits?api_key=${tmdb_apikey}`)
        ];

        if (getVideosAndReviews) {
            requests.push(
                axios.get(`${tmdb_base}/${id}/videos?api_key=${tmdb_apikey}`),
                axios.get(`${tmdb_base}/${id}/reviews?api_key=${tmdb_apikey}`)
            );
        }
        const response = await Promise.all(requests)

        return {
            d: response[0].data,
            c: response[1].data,
            v: getVideosAndReviews ? response[2].data : [],
            r: getVideosAndReviews ? response[3].data : [],
        }
    } catch (err) {
        console.log(err);
        throw new Error("Error while getting movie details by id.")
    }
}