import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

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

const mutex = new Mutex();
const customBaseQuery = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 && localStorage.getItem("refreshToken")) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
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

        if (refreshResult?.data) {
          localStorage.setItem(
            "accessToken",
            refreshResult?.data?.result?.token?.accessToken
          );
          localStorage.setItem(
            "refreshToken",
            refreshResult?.data?.result?.token?.refreshToken
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
          // logout
        }
      } finally {
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  tagTypes: ["CompanyDirections"],
  endpoints: (builder) => ({
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
  useGetCompanyDirectionsQuery,
  useGetCompanySizesQuery,
  useGetAddressQuery,
  useGetCountriesQuery,
  useGetCitiesQuery,
  useGetRegionsQuery,
} = apiSlice;
