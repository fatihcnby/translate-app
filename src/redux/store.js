import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languangeSlice";
import translateReducer from "./slices/translateSlice";

export default configureStore({
  reducer: {
    languageReducer,
    translateReducer,
  },
});
