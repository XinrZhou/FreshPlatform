import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import classificationSlice from "./slices/classificationSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import userSlice from "./slices/userSlice.ts";
import productSlice from "./slices/productSlice.ts";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    classification: classificationSlice,
    user: userSlice,
    product: productSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;