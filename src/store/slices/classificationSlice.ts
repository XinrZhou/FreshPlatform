import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  getCategories,
  getCategoriesByParentId,
  getProductsByCategoryId
} from "api/classification";
import { Category, Product } from "types/type";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CATEGORY_LEVEL } from "../../constants/enums";

interface ClassificationState {
  firstCategoryList: Category[],
  secondCategoryList: Category[],
  thirdCategoryList: Category[],
  productList: Product[],
}

const initialState: ClassificationState = {
  firstCategoryList: [],
  secondCategoryList: [],
  thirdCategoryList: [],
  productList: [],
}

export const getCategoryList = createAsyncThunk('getCategoryTree', 
  async (params: number) => {
    const res = await getCategories(params);
    return res.data.data
  }
)

export const getCategoryListByParentId = createAsyncThunk('getCategoryListByParentId', 
  async (params: object) => {
    const { level, pid } = params
    const res = await getCategoriesByParentId(pid);
    return {
      data: res.data.data,
      level
    }
  }
)

export const getProductList = createAsyncThunk('getProductList',
  async (cid: string) => {
    const res = await getProductsByCategoryId(cid);
    return res.data.data
  }
)

export const classificationSlice = createSlice({
  name: "classification",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.firstCategoryList = payload.categories;
      })
      .addCase(getCategoryListByParentId.fulfilled, (state, { payload }) => {
        const { data, level } = payload;
        level === CATEGORY_LEVEL.SECOND ?
          state.secondCategoryList = data.categories : 
          state.thirdCategoryList = data.categories;
      })
      .addCase(getProductList.fulfilled, (state, { payload }) => {
        const spuList = payload.spus;
        state.productList = spuList.map(item => {
          return {
            ...item,
            specialSpec: item.specialSpec ? JSON.parse(item.specialSpec) : {},
            tags: item.tags ? JSON.parse(item.tags) : [] 
          }
        })
      })
  }
})

export const {} = classificationSlice.actions;

export default classificationSlice.reducer;
