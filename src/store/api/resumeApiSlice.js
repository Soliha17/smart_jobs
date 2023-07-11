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
  useCreateResumeMutation,
  useGetAllWorkFormatQuery,
  useGetWorkFormatQuery,
  useGetAllTypeOfOrganizationQuery,
  useGetTypeOfOrganizationQuery,
  useGetCurrenciesQuery,
  useGetAllSkillQuery,
  useCreateSkillMutation,
} = resumeApiSlice;
