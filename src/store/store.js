import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: middleWares,
});

export const persistor = persistStore(store);

export default { store, persistor };