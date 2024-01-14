import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface HomeState {
}

const initialState: HomeState = {
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {

  }
})

export const {} = homeSlice.actions;

export default homeSlice.reducer;