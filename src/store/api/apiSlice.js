import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_ROUTE,
  prepareHeaders: async (headers, { getState }) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    headers.set("Accept", `application/json`);
    localStorage.getItem("language") == "en"
      ? headers.set("lang", "en")
      : localStorage.getItem("language") == "uz"
      ? headers.set("lang", "uz")
      : localStorage.getItem("language") == "ru"
      ? headers.set("lang", "ru")
      : headers.set("lang", "uz");
    return headers;
  },
});

console.log(localStorage.getItem("language"));

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
  tagTypes: ["skills"],
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
    getCountriesGeneral: builder.query({
      query: () => ({
        url: `/Countries/GetAll`,
      }),
      providesTags: ["GetCountriesGeneral"],
    }),
    getAllEducationLevel: builder.query({
      query: () => ({
        url: "/EducationLevel/GetAll",
      }),
      providesTags: ["GetAllEducationLevel"],
    }),
    getAllWorkFormat: builder.query({
      query: () => ({
        url: `/WorkFormat/GetAll`,
      }),
    }),
    getWorkFormat: builder.query({
      query: () => ({
        url: `/WorkFormat/Get`,
      }),
    }),
    getAllTypeOfOrganization: builder.query({
      query: () => ({
        url: `/TypeOfOrganization/GetAll`,
      }),
    }),
    getTypeOfOrganization: builder.query({
      query: () => ({
        url: `/TypeOfOrganization/Get`,
      }),
    }),
    getCurrencies: builder.query({
      query: () => ({
        url: `/Currencies/Get`,
      }),
    }),
    getAllSkill: builder.query({
      query: () => ({
        url: `/Skill/GetAll`,
      }),
      providesTags: ["skills"],
    }),
    getLanguages: builder.query({
      query: () => ({
        url: `/Languages/GetAll`,
      }),
      providesTags: ["AllLanguages"],
    }),
    getLanguage: builder.query({
      query: () => ({
        url: `/Languages/Get`,
      }),
      providesTags: ["Language"],
    }),
    getAllLanguageProficiency: builder.query({
      query: () => ({
        url: `/LanguageProficiency/GetAll`,
      }),
      providesTags: ["AllLanguageProficiency"],
    }),
    getLanguageProficiency: builder.query({
      query: () => ({
        url: `/LanguageProficiency/Get`,
      }),
      providesTags: ["LanguageProficiency"],
    }),
    createSkill: builder.mutation({
      query: (body) => ({
        url: `/Skill/Create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["skills"],
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
  useGetCountriesGeneralQuery,
  useGetAllEducationLevelQuery,
  useGetWorkFormatQuery,
  useGetAllTypeOfOrganizationQuery,
  useGetTypeOfOrganizationQuery,
  useGetCurrenciesQuery,
  useGetAllSkillQuery,
  useCreateSkillMutation,
  useAcademicResultMutation,
  useGetLanguagesQuery,
  useGetLanguageQuery,
  useGetLanguageProficiencyQuery,
  useGetAllLanguageProficiencyQuery,
} = apiSlice;
