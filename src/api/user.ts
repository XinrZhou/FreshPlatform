import axios from "./http";

// 登录
export function goLogin(data) {
    return axios.post("/users/login", data);
}
