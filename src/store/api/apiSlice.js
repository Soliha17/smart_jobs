import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROUTE,
    prepareHeaders: async (headers) => {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJGaXJzdE5hbWUiOiJGYXhyaWRkaW4iLCJMYXN0TmFtZSI6Ilh1c2huYXphcm92IiwiUm9sZSI6Ik1vZGVyYXRvciIsIlBob25lTnVtYmVyIjoiOTk4OTM2ODMxNTU1IiwiRW1haWwiOiJtYWlsQGtodXNobmF6YXJvdi5tZSIsIlNleCI6InRydWUiLCJuYmYiOjE2ODg0NjEwMzMsImV4cCI6MTY4ODQ2NDAzMywiaWF0IjoxNjg4NDYxMDMzfQ.ZhLIYXnFIRISZVSMbQj61oDtRG6o_CPbHuckq-viquc";
      headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set("Accept", `application/json`);
      return headers;
    },
  }),
  tagTypes: ["pages", "page"],
  endpoints: (builder) => ({
    //Pages
    // getPages: builder.query({
    //   query: (params) => ({
    //     url: "/api/v1/page/getAll",
    //     params,
    //   }),
    //   providesTags: ["pages"],
    // }),
    verifyNumber: builder.mutation({
      query: (body) => ({
        url: `/Organization/VerifySmsCode`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  // pages
  useVerifyNumberMutation,
} = apiSlice;
