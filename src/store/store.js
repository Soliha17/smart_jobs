import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root";
import { apiSlice } from "./api/apiSlice";

const middleWares = [thunk, apiSlice.middleware];

// if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === "development",
  middleware: middleWares,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const persistor = persistStore(store);

export default { store, persistor };
