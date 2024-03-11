import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  getCategories,
  getCategoriesByParentId,
} from "api/classification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CATEGORY_LEVEL } from "../../constants/enums";

interface ClassificationState {
  firstCategoryList: any[],
  secondCategoryList: any[],
  thirdCategoryList: any[],
}

const initialState: ClassificationState = {
  firstCategoryList: [],
  secondCategoryList: [],
  thirdCategoryList: [],
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
  }
})

export const {} = classificationSlice.actions;

export default classificationSlice.reducer;
