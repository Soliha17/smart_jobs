import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  patchOrganizationRefreshToken,
  postGetSmsCode,
} from "./request";

const initialState = {
  phoneNumber: "",
  smsId: null,
  smsCode:["","","",""],
  isLoading: false,
};

export const GetSmsCodeThunk = createAsyncThunk(
  "auth/getSmsCode",
  postGetSmsCode
);

export const RefreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  patchOrganizationRefreshToken
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSmsId(state, action) {
      state.smsId = action.payload;
    },
    setSmsCode(state, action) {
      state.smsCode = action.payload;
    },
    setPhone(state, action) {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSmsCodeThunk.pending, function (state) {
      state.isLoading = true;
    });
    builder.addCase(GetSmsCodeThunk.fulfilled, function (state, action) {
      state.isLoading = false;
      state.smsId = action.payload?.result?.smsId;
    });
    builder.addCase(GetSmsCodeThunk.rejected, function (state) {
      state.isLoading = false;
    });
  },
});

export const {  setSmsId, setPhone, setSmsCode } = authSlice.actions;

export default authSlice.reducer;
