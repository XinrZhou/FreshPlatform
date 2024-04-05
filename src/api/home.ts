import axios from "./http";
export function getProducts(page: number, pageSize: number) {
  return axios.get(`/sku/skus/${page}/${pageSize}`);
}