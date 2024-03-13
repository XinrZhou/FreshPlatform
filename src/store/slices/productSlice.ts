import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDetails } from "/api/classification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Sku, Product } from "types/type";

interface UserState {
  productInfo: Product,
  skuList: Sku[]
}

const initialState: UserState = {
  productInfo: {},
  skuList: []
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
    return res.data.data
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
      const spuObj = payload.spus;
      state.productInfo = {
        ...payload.spus,
        genericSpec: parseJSONIfExists(payload.spus.genericSpec),
        specialSpec: parseJSONIfExists(payload.spus.specialSpec),
        tags: parseJSONIfExists(payload.spus.tags),
      };
      state.skuList = payload.skus;
    })
  }
})

export const { } = productSlice.actions;

export default productSlice.reducer;