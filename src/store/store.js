import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitSlice";

// store for habit-slice
export const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
});
