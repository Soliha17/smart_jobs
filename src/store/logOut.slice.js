import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLogout } from "./request";

const initialState = {
  phoneNumber: "",
  smsId: null,
  isLoading: false,
};

export const LogOutThunk = createAsyncThunk("auth/logOut", getLogout);

export const logoutSlice = createSlice({
  name: "logOut",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LogOutThunk.pending, function (state) {
      state.isLoading = true;
    });
    builder.addCase(LogOutThunk.fulfilled, function (state, action) {
      state.isLoading = false;
    });
    builder.addCase(LogOutThunk.rejected, function (state) {
      state.isLoading = false;
    });
  },
});

export const { setSmsCode, setPhone } = logoutSlice.actions;

export default logoutSlice.reducer;
