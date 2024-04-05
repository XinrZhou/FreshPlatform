import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "api/common";
import { getProducts } from "api/home";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Page, Product } from "types/type";
import { parseJSONIfExists } from "utils";
interface HomeState {
  pageInfo: Page;
  productList: Product[];
}

const initialState: HomeState = {
  pageInfo: {},
  productList: [],
}

export const getPageInfo = createAsyncThunk('getPageInfo',
  async (pageName: string) => {
    const res = await getPage(pageName);
    return res.data.data;
  }
)

export const getProductList = createAsyncThunk('getProductList',
  async ({ page, pageSize }: { page: number, pageSize: number }) => {
    const res = await getProducts(page, pageSize);
    return res.data.data; 
  }
)

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(getPageInfo.fulfilled, (state, {payload}) => {
      state.pageInfo = JSON.parse(payload.pages.settings)
    })
    .addCase(getProductList.fulfilled, (state, {payload}) => {
      const skuList = payload.skus;
      state.productList = skuList.map(item => {
        return {
          ...item,
          specialSpec: parseJSONIfExists(item.specialSpec),
          tags: item.tags ? JSON.parse(item.tags) : [] 
        }
      })
    })
  }
})

export const {} = homeSlice.actions;

export default homeSlice.reducer;