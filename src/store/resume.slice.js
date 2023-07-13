import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeFormData: {
    files: [
      {
        linkTypeId: null,
        url: "",
      },
    ],
  },
  resumeID: null,
  experienceDrawerData: {},
  experienceData: [],
  educationData: [],
  educationDrawerData: {},
  familyDrawerData: {},
  additionalFormData: {
    knowingTheLanguages: [
      {
        languagesId: null,
        languageProficiencyId: null,
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
    setEducationDrawerData: (state, action) => {
      state.educationDrawerData = action.payload;
    },
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    setFamilyDrawerData: (state, action) => {
      state.familyDrawerData = action.payload;
    },
    setResumeID: (state, action) => {
      state.resumeID = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setResumeFormData,
  setExperienceDrawerData,
  setAdditionalFormData,
  setExperienceData,
  setFamilyDrawerData,
  setEducationDrawerData,
  setEducationData,
  setResumeID,
} = createResumeSlice.actions;

export default createResumeSlice.reducer;
