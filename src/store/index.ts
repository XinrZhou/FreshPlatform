import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import classificationSlice from "./slices/classificationSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import userSlice from "./slices/userSlice.ts";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    user: userSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;