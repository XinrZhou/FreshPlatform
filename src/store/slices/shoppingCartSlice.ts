import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addCarts, getCarts } from "api/shoppingCart";
import { Cart } from "types/type";

interface ShoppingCartState {
  cartList: Cart[];
}

const initialState: ShoppingCartState = {
  cartList: []
}

export const addCart = createAsyncThunk('addCart', 
  async (params) => {
    const res = await addCarts(params);
    return res.data.data;
  }
)

export const getCart = createAsyncThunk('getCart', 
  async () => {
    const res = await getCarts();
    return res.data.data;
  }
)

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(getCart.fulfilled, (state, {payload}) => {
      state.cartList = payload.carts;
    })
  }
})

export const {} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;