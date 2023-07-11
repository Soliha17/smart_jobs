import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeFormData: {
    files: [
      {
        type: null,
        value: "",
      },
    ],
  },
};

export const createResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeFormData: (state, action) => {
      state.resumeFormData = { ...state.resumeFormData, ...action.payload };
    },
  },
  extraReducers: (builder) => {},
});

export const { setResumeFormData } = createResumeSlice.actions;

export default createResumeSlice.reducer;
