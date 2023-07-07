import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_ROUTE,
  prepareHeaders: async (headers, { getState }) => {
    console.log(getState());
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    headers.set("Accept", `application/json`);
    return headers;
  },
});

const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 && localStorage.getItem("refreshToken")) {
    // console.log(args, api, extraOptions);
    let refreshResult = await fetchBaseQuery({
      baseUrl: process.env.REACT_APP_API_ROUTE,
      prepareHeaders: async (headers) => {
        const refreshToken = localStorage.getItem("refreshToken");
        headers.set("refreshToken", refreshToken);
        headers.set("Accept", `application/json`);
        return headers;
      },
    })(
      { ...args, url: "/Organization/RefreshToken", method: "PATCH" },
      api,
      extraOptions
    );

    localStorage.setItem(
      "accessToken",
      refreshResult?.data?.result?.token?.accessToken
    );
    localStorage.setItem(
      "refreshToken",
      refreshResult?.data?.result?.token?.refreshToken
    );

    result = await baseQuery(args, api, extraOptions);
  }

  console.log(result);

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
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
  useGetWorkerQuery,
} = apiSlice;
