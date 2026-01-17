const { api } = require("../api");

export const moviesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUpcomingMovies: builder.query({
            query: () => "/upcoming",
            providerTags: ['Movie'],
        })
    })
})

export const {useGetMoviesQuery} = moviesApi;