import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDetails } from "api/classification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Sku, Product } from "types/type";

interface UserState {
  productInfo: Product,
  skuList: Sku[],
}

const initialState: UserState = {
  productInfo: {},
  skuList: [],
}

const parseJSONIfExists = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return {};
  }
};

export const getProductDetail = createAsyncThunk('getProductDetail', 
  async (params) => {
    const res = await getProductDetails(params);
    return res.data.data;
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(getProductDetail.fulfilled, (state, {payload}) => {
      const skuObj = payload.skus;
      state.productInfo = {
        ...skuObj,
        genericSpec: parseJSONIfExists(skuObj.genericSpec),
        specialSpec: parseJSONIfExists(skuObj.specialSpec),
        tags: parseJSONIfExists(skuObj.tags),
      };
      state.skuList = payload.skuList;
    })
  }
})

export const { } = productSlice.actions;

export default productSlice.reducer;