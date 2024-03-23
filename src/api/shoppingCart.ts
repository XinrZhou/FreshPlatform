import axios from "./http";

// 添加购物车
export function postCart(data) {
  return axios.post("/cart/carts", data);
}

// 获取购物车信息
export function getCarts() {
  return axios.get("/cart/carts");
}

// 添加订单
export function postOrder(data) {
  return axios.post("/order/orders", data);
}