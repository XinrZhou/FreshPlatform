import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ShoppingCartState {
}

const initialState: ShoppingCartState = {
}

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {

  }
})

export const {} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;