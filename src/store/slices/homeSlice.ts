import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "api/common";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Page } from "types/type";
interface HomeState {
  pageInfo: Page;
}

const initialState: HomeState = {
  pageInfo: {},
}

export const getPageInfo = createAsyncThunk('getPageInfo',
  async (pageName: string) => {
    const res = await getPage(pageName);
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
  }
})

export const {} = homeSlice.actions;

export default homeSlice.reducer;