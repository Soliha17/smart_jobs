import { apiSlice } from "./apiSlice";

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (body) => ({
        url: `/Resume/Create`,
        method: "POST",
        body,
      }),
    }),
    // need add put resume

    getMe: builder.query({
      query: (role) => ({
        url: `/${role}/Me`,
      }),
    }),
  }),
});

export const { useCreateResumeMutation } = resumeApiSlice;
