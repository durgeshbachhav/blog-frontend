import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../reduxStore/slices/BlogSlice";
import appReducer from "../reduxStore/slices/appSlice";
import userReducer from "../reduxStore/slices/userSlice";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    app: appReducer,
    user: userReducer,
  },
});
