import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goLogin } from "../../api/user";

interface UserState {
}

const initialState: UserState = {
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  }
})

export const login = createAsyncThunk('login', async (params) => {
  const res = await goLogin(params);
  console.log('res===', res)
})

export const {} = userSlice.actions;

export default userSlice.reducer;