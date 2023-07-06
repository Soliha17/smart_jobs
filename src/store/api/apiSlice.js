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
} = apiSlice;
