import axios from "axios";

// const base_url = "https://api.tomonisolution.com";
const base_url = "https://api-dev.tomonisolution.com";

const getTopProduct = () => {
  return axios.get(`${base_url}/api/top-products-for-sale`);
};

const getProductList = (params: object) => {
  return axios.get(`${base_url}/api/products`, { params });
};

const getProductDetail = (id: string, params: object) => {
  return axios.get(`${base_url}/api/products/${id}`, { params });
};

const getCheckCodeInfo = (id: string, params: object) => {
  return axios.get(`${base_url}/api/anti-counterfeiting-stamps/${id}`, { params });
};

const checkCode = (id: string) => {
  return axios.post(`${base_url}/api/anti-counterfeiting-stamps/check/${id}`);
};

export { getTopProduct, getProductList, getProductDetail, getCheckCodeInfo, checkCode };
