import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goLogin, addCarts, getUserInfo } from "api/user";
import { User } from "types/type";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  isLogin: boolean,
  userInfo: User,
}

const initialState: UserState = {
  isLogin: false,
  userInfo: {},
}

export const checkToken = createAsyncThunk('checkToken', 
  async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
      return true;
    } else {
      return false;
    }
  }
)

export const login = createAsyncThunk('login', 
  async (params) => {
    const res = await goLogin(params);
    AsyncStorage.setItem('token', res.headers.token);
    AsyncStorage.setItem('role', res.headers.role);
  }
)

export const getInfo = createAsyncThunk('getUserInfo', 
  async () => {
    const res = await getUserInfo();
    return res.data.data;
  }
)


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(checkToken.fulfilled, (state, {payload}) => {
      state.isLogin = payload;
    })
    .addCase(login.fulfilled, (state, {payload}) => {
      state.isLogin = true;
    })
    .addCase(getInfo.fulfilled, (state, {payload}) => {
      state.userInfo = payload.user;
    })
  }
})

export const { } = userSlice.actions;

export default userSlice.reducer;