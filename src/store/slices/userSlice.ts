import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goLogin } from "../../api/user";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  isLogin: boolean,
}

const initialState: UserState = {
  isLogin: false,
}

export const login = createAsyncThunk('login', 
  async (params) => {
    const res = await goLogin(params);
    AsyncStorage.setItem('token', res.headers.token);
    AsyncStorage.setItem('role', res.headers.role);
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadDataEnd: (state, {payload}) => {
      // state.list = payload;
      // state.totals = payload.length;
      console.log('state===', state, payload)
    },
  },
  extraReducers: builder => {
    builder
    .addCase(login.fulfilled, (state, {payload}) => {
      state.isLogin = true;
    })
  }
})

export const { loadDataEnd } = userSlice.actions;

export default userSlice.reducer;