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
  async ({ skuId, userId }) => {
    if (skuId && userId) {
      console.log(skuId, userId);
      const res = await addCarts({ skuId, userId });
      return skuId;
    }
  }
)

export const getCart = createAsyncThunk('getCart', 
  async (params) => {
    const res = await getCarts(params);
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
    .addCase(addCart.fulfilled, (state, {payload, dispatch}) => {
      dispatch(getCart(payload))
    })
    .addCase(getCart.fulfilled, (state, {payload}) => {
      state.cartList = payload.carts;
    })
  }
})

export const {} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;