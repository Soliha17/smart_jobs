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
    academicResult: builder.mutation({
      query: (body) => ({
        url: `/Resume/AcademicResult`,
        method: "POST",
        body,
      }),
    }),
    license: builder.mutation({
      query: (body) => ({
        url: `/Resume/License`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetAllWorkFormatQuery,
  useLicenseMutation,
} = resumeApiSlice;
