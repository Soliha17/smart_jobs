import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedButton: "worker",
  isUserLoggedIn: false,
};

export const selectRoleSlice = createSlice({
  name: "selectRole",
  initialState,
  reducers: {
    selectButton: (state, action) => {
      state.selectedButton = action.payload;
    },
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { selectButton, setIsUserLoggedIn } = selectRoleSlice.actions;

export default selectRoleSlice.reducer;
