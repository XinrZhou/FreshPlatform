import axios from "./http";

// 登录
export function goLogin(data) {
    return axios.post("/users/login", data);
}

// 获取用户信息
export function getUserInfo() {
    return axios.get("/users/info");
}

