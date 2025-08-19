import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice";
import toDosReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    usersData: usersReducer,
    toDosData: toDosReducer,
  },
});
