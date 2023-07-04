import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedButton: "worker",
};

export const selectRoleSlice = createSlice({
  name: "selectRole",
  initialState,
  reducers: {
    selectButton: (state, action) => {
      state.selectedButton = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { selectButton } = selectRoleSlice.actions;

export default selectRoleSlice.reducer;
