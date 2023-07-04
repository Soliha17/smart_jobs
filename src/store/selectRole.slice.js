import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  organization: "organization",
  worker: "worker",
  selectedButton: "btn1",
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
