import axios from "./http";

// 获取商品类目
export function getCategories(level: number) {
    return axios.get(`/category/categories/${level}`);
};

// 获取子类目
export function getCategoriesByParentId(pid: string) {
  return axios.get(`/category/category/${pid}`);
}