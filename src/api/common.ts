import axios from "./http";

// 获取页面配置
export function getPage(name: string) {
    return axios.get(`/page/pages/${name}`);
};
