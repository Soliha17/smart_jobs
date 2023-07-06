import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getLogout,
  patchOrganizationRefreshToken,
  postGetSmsCode,
} from "./request";

const initialState = {
  phoneNumber: "",
  smsId: null,
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
    setSmsCode(state, action) {
      state.smsId = action.payload;
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

export const { setSmsCode, setPhone } = authSlice.actions;

export default authSlice.reducer;
