import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRole: "Worker",
  isUserLoggedIn: false,
};

export const selectRoleSlice = createSlice({
  name: "selectRole",
  initialState,
  reducers: {
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSelectedRole, setIsUserLoggedIn } = selectRoleSlice.actions;

export default selectRoleSlice.reducer;
