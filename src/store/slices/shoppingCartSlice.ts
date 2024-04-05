import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postCart, getCarts, postOrder } from "api/shoppingCart";
import { Cart, Order } from "types/type";
import { getCartTotalCount } from "utils";

interface ShoppingCartState {
  cartList: Cart[];
  cartCount: number;
}

const initialState: ShoppingCartState = {
  cartList: [],
  cartCount: 0,
}

// 添加购物车
export const addCart = createAsyncThunk(
  'shoppingCart/addCart',
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await postCart(params);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 获取购物车
export const getCart = createAsyncThunk(
  'shoppingCart/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCarts();
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 添加订单
interface AddOrderParams {
  extParams?: any;
  addressSpec: any;
  selectedList: Cart[];
  price: number;
  userId: string;
}

export const addOrder = createAsyncThunk(
  'shoppingCart/addOrder',
  async ({ extParams = {}, addressSpec, selectedList, price, userId }: AddOrderParams, { rejectWithValue }) => {
    try {
      const params: Order = {
        userId,
        addressSpec: JSON.stringify(addressSpec),
        orderSpec: JSON.stringify(selectedList),
        price,
        ...extParams,
      };
      const res = await postOrder(params);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.cartList = payload.carts;
        state.cartCount = getCartTotalCount(payload.carts);
      });
  }
});

export default shoppingCartSlice.reducer;
