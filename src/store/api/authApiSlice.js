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
    register: builder.mutation({
      query: ({ role, body }) => ({
        url: `/${role}/Register`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: ({ role, body }) => ({
        url: `/${role}/Login`,
        method: "POST",
        body,
      }),
    }),
    getMe: builder.query({
      query: (role) => ({
        url: `/${role}/Me`,
      }),
    }),
  }),
});

export const {
  useVerifySmsCodeMutation,
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
} = authApiSlice;
