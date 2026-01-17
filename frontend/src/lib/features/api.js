import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_BACKEND_DEV
    }),
    tagTypes: ['Movie', 'User', 'Auth'],
    endpoints: () => ({})
})