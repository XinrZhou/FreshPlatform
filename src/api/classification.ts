import axios from "./http";

// 获取商品类目
export function getCategories(level: number) {
    return axios.get(`/category/categories/${level}`);
};

// 获取子类目
export function getCategoriesByParentId(pid: string) {
  return axios.get(`/category/category/${pid}`);
}

// 获取商品列表
export function getProductsByCategoryId(cid: string) {
  return axios.get(`/spu/spus/${cid}`)
}

// 获取商品详情
export function getProductDetails(sid: string) {
  return axios.get(`/spu/detail/${sid}`)
}

// 获取sku列表
export function getSkusBySpuId(sid: string) {
  return axios.get(`/sku/skus/${sid}`)
}