import { apiSlice } from "./apiSlice";

export const linkTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLinkType: builder.query({
      query: () => ({
        url: `/LinkType/Get`,
      }),
    }),
    getAllLinkType: builder.query({
      query: () => ({
        url: `/LinkType/GetAll`,
      }),
    }),
  }),
});

export const { useGetLinkTypeQuery, useGetAllLinkTypeQuery } = linkTypeApiSlice;
