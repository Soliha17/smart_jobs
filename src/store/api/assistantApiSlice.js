import { apiSlice } from "./apiSlice";

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: ({ params, body }) => ({
        url: `/Assistant/UploadFile`,
        method: "POST",
        params,
        body,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = resumeApiSlice;
