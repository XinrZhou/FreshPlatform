import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import classificationSlice from "./slices/classificationSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import userCenterSlice from "./slices/userCenterSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;