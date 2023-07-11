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

    getWorkFormat: builder.query({
      query: () => ({
        url: `/WorkFormat/Get`,
      }),
    }),
    getTypeOfOrganization: builder.query({
      query: () => ({
        url: `/TypeOfOrganization/Get`,
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetWorkFormatQuery,
  useGetTypeOfOrganizationQuery,
} = resumeApiSlice;
