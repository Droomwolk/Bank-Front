/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import authSlice from "./authSlice";
import loginSlice from "./loginSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["login"],
};

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  authentic: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
