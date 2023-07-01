import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import selectRoleSlice from "./selectRole.slice";

const rootReducer = combineReducers({
  selectRoleSlice: selectRoleSlice,
});

export default persistReducer(
  { key: "root", storage, whitelist: ["auth"] },
  rootReducer
);
