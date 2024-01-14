import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ClassificationState {
}

const initialState: ClassificationState = {
}

export const classificationSlice = createSlice({
  name: "classification",
  initialState,
  reducers: {

  }
})

export const {} = classificationSlice.actions;

export default classificationSlice.reducer;