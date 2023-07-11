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
  experienceDrawerData: {},
};

export const createResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeFormData: (state, action) => {
      state.resumeFormData = { ...state.resumeFormData, ...action.payload };
    },
    setExperienceDrawerData: (state, action) => {
      state.experienceDrawerData = {
        ...state.experienceDrawerData,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { setResumeFormData, setExperienceDrawerData } =
  createResumeSlice.actions;

export default createResumeSlice.reducer;
