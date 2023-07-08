import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifySmsCodeOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/VerifySmsCode`,
        method: "POST",
        body,
      }),
    }),
    verifySmsCodeWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/VerifySmsCode`,
        method: "POST",
        body,
      }),
    }),
    registerOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/Register`,
        method: "POST",
        body,
      }),
    }),
    registerWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/Register`,
        method: "POST",
        body,
      }),
    }),
    loginOrganization: builder.mutation({
      query: (body) => ({
        url: `/Organization/Login`,
        method: "POST",
        body,
      }),
    }),
    loginWorker: builder.mutation({
      query: (body) => ({
        url: `/Worker/Login`,
        method: "POST",
        body,
      }),
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
  }),
});

export const {
  useVerifySmsCodeOrganizationMutation,
  useVerifySmsCodeWorkerMutation,
  useRegisterOrganizationMutation,
  useRegisterWorkerMutation,
  useLoginOrganizationMutation,
  useLoginWorkerMutation,
  useGetOrganizationQuery,
  useLazyGetOrganizationQuery,
  useGetWorkerQuery,
  useLazyGetWorkerQuery,
} = authApiSlice;
