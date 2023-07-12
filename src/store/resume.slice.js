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
  additionalFormData: {
    languageFiles: [
      {
        language: null,
        level: null,
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
    setAdditionalFormData: (state, action) => {
      state.additionalFormData = {
        ...state.additionalFormData,
        ...action.payload,
      };
    },
    setExperienceDrawerData: (state, action) => {
      state.experienceDrawerData = action.payload;
    },
    setExperienceData: (state, action) => {
      state.experienceData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setResumeFormData,
  setExperienceDrawerData,
  setAdditionalFormData,
  setExperienceData,
} = createResumeSlice.actions;

export default createResumeSlice.reducer;
