import axios from "./http";

// 添加购物车
export function addCarts(data) {
  return axios.post("/cart/carts", data);
}

// 获取购物车信息
export function getCarts() {
  return axios.get("/cart/carts");
}