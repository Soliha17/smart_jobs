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
    createResumeStep1: builder.mutation({
      query: (body) => ({
        url: `/Resume/CreateStep1`,
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
    link: builder.mutation({
      query: (body) => ({
        url: `/Resume/Link`,
        method: "POST",
        body,
      }),
    }),

    education: builder.mutation({
      query: (body) => ({
        url: `/Resume/Education`,
        method: "POST",
        body,
      }),
    }),
    postPlacesOfWork: builder.mutation({
      query: (body) => ({
        url: `/Resume/AddPlacesOfWork`,
        method: "POST",
        body,
      }),
    }),
    postRelative: builder.mutation({
      query: (body) => ({
        url: `/Resume/Relative`,
        method: "POST",
        body,
      }),
    }),
    linkAllType: builder.query({
      query: () => ({
        url: `/LinkType/GetAll`,
      }),
      providesTags: ["LinkAllType"],
    }),
    linkType: builder.query({
      query: () => ({
        url: `/LinkType/Get`,
      }),
      providesTags: ["LinkType"],
    }),
    language: builder.query({
      query: () => ({
        url: `/Resume/Language`,
      }),
      providesTags: ["LanguageResume"],
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetAllWorkFormatQuery,
  useLicenseMutation,
  useCreateResumeStep1Mutation,
  useLinkMutation,
  useEducationMutation,
  usePostPlacesOfWorkMutation,
  usePostRelativeMutation,
  useLinkAllTypeQuery,
  useLinkTypeQuery,
  useLanguageQuery
} = resumeApiSlice;
