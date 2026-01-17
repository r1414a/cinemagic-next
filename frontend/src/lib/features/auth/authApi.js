const { api } = require("../api");

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        sendOtp: builder.mutation({
            query: (email) => ({
                url: "/api/auth/v1/send-otp",
                method: "POST",
                body: {email},
            })
        }),

        // verifyOtp: builder.mutation({
        //     query: ({email, otp}) => ({
        //         url: "/api/auth/v1/verify-otp",
        //         method: "POST",
        //         body: {email,otp}
        //     })
        // }),

        //getMe,logout
    })
})

export const {
    useSendOtpMutation
} = authApi