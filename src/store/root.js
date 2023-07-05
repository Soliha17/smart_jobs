import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import selectRoleSlice from "./selectRole.slice";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./auth.slice";

const rootReducer = combineReducers({
  selectRoleSlice: selectRoleSlice,
  authSlice: authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default persistReducer(
  { key: "root", storage, whitelist: ["auth"] },
  rootReducer
);
