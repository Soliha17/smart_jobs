import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getOrganizationMe,
  postOrganizationGetSmsCode,
  postOrganizationVerifySmsCode,
} from "./request";

const initialState = {
  phoneNumber: "",
  smsId: null,
  isLoading: false,
};

export const GetSmsCodeThunk = createAsyncThunk(
  "auth/getSmsCode",
  postOrganizationGetSmsCode
);

export const GetOrganizationMe = createAsyncThunk(
  "auth/organization",
  getOrganizationMe
);

export const PostOrganizationVerifySmsCode = createAsyncThunk(
  "auth/VerifySmsCode",
  postOrganizationVerifySmsCode
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSmsCode(state, action) {
      state.smsId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSmsCodeThunk.pending, function (state) {
      state.isLoading = true;
    });
    builder.addCase(GetSmsCodeThunk.fulfilled, function (state, action) {
      state.isLoading = false;
      state.smsId = action.payload.result.smsId;
    });
    builder.addCase(GetSmsCodeThunk.rejected, function (state) {
      state.isLoading = false;
    });
  },
  // extraReducers: {
  //   [GetSmsCodeThunk.pending]: function (state) {
  //     state.isLoading = true;
  //   },
  //   [GetSmsCodeThunk.fulfilled]: function (state, action) {
  //     state.isLoading = false;
  //   },
  //   [GetSmsCodeThunk.rejected]: function (state) {
  //     state.isLoading = false;
  //   },
  // },
});

export const { setSmsCode } = authSlice.actions;

export default authSlice.reducer;
