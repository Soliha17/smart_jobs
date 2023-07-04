import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  smsId: 0,
};

export const getSmsCodeSlice = createSlice({
  name: "getSmsCode",
  initialState,
  reducers: {
    selectButton: (state, action) => {
      state.selectedButton = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { selectButton } = getSmsCodeSlice.actions;

export default getSmsCodeSlice.reducer;
