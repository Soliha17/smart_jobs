import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROUTE,
    prepareHeaders: async (headers) => {
      const accessToken = localStorage.getItem("accessToken");
      headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set("Accept", `application/json`);
      return headers;
    },
  }),
  tagTypes: ["CompanyDirections"],
  endpoints: (builder) => ({
    // ----- Auth -----
    // VerifySmsCode Organization
    verifySmsCodeOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/VerifySmsCode`,
        method: "POST",
        body,
      }),
    }),
    // Register Organization
    registerOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/Register`,
        method: "POST",
        body,
      }),
    }),
    // VerifySmsCode Worker
    verifySmsCodeWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/VerifySmsCode`,
        method: "POST",
        body,
      }),
    }),
    // Register Worker
    registerWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/Register`,
        method: "POST",
        body,
      }),
    }),
    // Login Organization
    loginOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/Login`,
        method: "POST",
        body,
      }),
    }),
    // Login Worker
    loginWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/Login`,
        method: "POST",
        body,
      }),
    }),
    // Company direction
    getCompanyDirections: builder.query({
      query: () => ({
        url: "/CompanyDirection/Get",
      }),
      providesTags: ["CompanyDirections"],
    }),
    // Company sizes
    getCompanySizes: builder.query({
      query: () => ({
        url: "/CompanySizes/Get",
      }),
      providesTags: ["CompanySizes"],
    }),
    // Address
    getAddress: builder.query({
      query: () => ({
        url: "/Address/Get",
      }),
      providesTags: ["Address"],
    }),
    getOrganization: builder.query({
      query: () => ({
        url: "/Organization/Me",
      }),
      providesTags: ["Organization"],
    }),
    getWorker: builder.query({
      query: () => ({
        url: "/Worker/Me",
      }),
      providesTags: ["Worker"],
    }),
    // Davlatlar
    getCountries: builder.query({
      query: () => ({
        url: "/Address/GetDavlatlar",
      }),
      providesTags: ["GetDavlatlar"],
    }),
    getRegions: builder.query({
      query: (params) => ({
        url: "/Address/GetViloyat",
        params,
      }),
      providesTags: ["GetViloyat"],
    }),
    getCities: builder.query({
      query: (params) => ({
        url: "/Address/GetShaxar",
        params,
      }),
      providesTags: ["GetShahar"],
    }),
  }),
  shouldRetryOnError: (error) => {
    console.log(error);
    alert("dsakn")
    // Check if the error is due to an expired token
    if (error.status === 401 && error.data?.code === 'TOKEN_EXPIRED') {
      // Implement your token refresh logic here
      // Retrieve a new access token using the refresh token
      // Update the access token in your application's state or storage

      // Return true to indicate that the request should be retried
      return true;
    }

    // Return false to indicate that the request should not be retried
    return false;
  },
});

export const {
  // VerifySmcCodeOrganization
  useVerifySmsCodeOrganizationMutation,
  // VerifySmsCodeWorker
  useVerifySmsCodeWorkerMutation,
  // RegisterOrganization
  useRegisterOrganizationMutation,
  // RegisterWorker
  useRegisterWorkerMutation,
  // CompanyDirection
  useGetCompanyDirectionsQuery,
  // CompanySizes
  useGetCompanySizesQuery,
  // Address
  useGetAddressQuery,
  useLoginOrganizationMutation,
  useGetCountriesQuery,
  useGetCitiesQuery,
  useGetRegionsQuery,
  useLoginWorkerMutation,
  useGetOrganizationQuery,
  useGetWorkerQuery
} = apiSlice;
