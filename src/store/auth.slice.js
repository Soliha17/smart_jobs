import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postOrganizationGetSmsCode } from "./requests/request";

const initialState = {
  phoneNumber: "",
  isLoading: false,
};

export const GetSmsCodeThunk = createAsyncThunk(
  "auth/getSmsCode",
  postOrganizationGetSmsCode
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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

export const {} = authSlice.actions;

export default authSlice.reducer;
