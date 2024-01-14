import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserCenterState {
}

const initialState: UserCenterState = {
}

export const userCenterSlice = createSlice({
  name: "userCenter",
  initialState,
  reducers: {

  }
})

export const {} = userCenterSlice.actions;

export default userCenterSlice.reducer;