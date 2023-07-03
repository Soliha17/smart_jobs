import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getOrganizationMe, postOrganizationGetSmsCode } from "./request";

const initialState = {
  phoneNumber: "",
  smsCode: null,
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSmsCode(state, action) {
      state.smsCode = action.payload;
    },
  },
  extraReducers: {
    [GetSmsCodeThunk.pending]: function (state) {
      state.isLoading = true;
    },
    [GetSmsCodeThunk.fulfilled]: function (state, action) {
      state.isLoading = false;
    },
    [GetSmsCodeThunk.rejected]: function (state) {
      state.isLoading = false;
    },
  },
});

export const { setSmsCode } = authSlice.actions;

export default authSlice.reducer;
