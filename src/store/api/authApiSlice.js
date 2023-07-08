import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifySmsCode: builder.mutation({
      query: ({ role, body }) => ({
        url: `/${role}/VerifySmsCode`,
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
  useVerifySmsCodeMutation,
  useRegisterOrganizationMutation,
  useRegisterWorkerMutation,
  useLoginOrganizationMutation,
  useLoginWorkerMutation,
  useGetOrganizationQuery,
  useLazyGetOrganizationQuery,
  useGetWorkerQuery,
  useLazyGetWorkerQuery,
} = authApiSlice;
