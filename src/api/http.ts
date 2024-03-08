import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 20000
});

// request interceptor
service.interceptors.request.use((config: any) => {
  const token: string | null = sessionStorage.getItem('TOKEN');
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
    ElMessage.error(response.data.message);
    return Promise.reject(new Error(response.data.message));
  }
}, error => {
  console.log("err" + error);
  return Promise.reject(error);
});

// request handler
service (options)
  .then ((res) => {
    resolve(res);
  })
  .catch ((error) => {
    reject(error);
  });
export default service;