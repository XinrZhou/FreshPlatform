import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const service = axios.create({
    baseURL: 'http://192.168.1.11:8080',
    timeout: 20000
});

// request interceptor
service.interceptors.request.use(async (config: any) => {
  const token: string | null = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['token'] = token;
  }
  return config;
}, error => {
  Promise.reject(error);
});

  // response interceptor
service.interceptors.response.use((response: any) => {
  if (response.data.code === 200) {
    return response;
  } else {
    return Promise.reject(new Error(response.data.message));
  }
}, error => {
  console.log("err" + error);
  return Promise.reject(error);
});

export default service;