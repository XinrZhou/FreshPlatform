import axios from "axios";

// 登录
export function goLogin(data) {
    return axios.post("/users/login", data);
}
