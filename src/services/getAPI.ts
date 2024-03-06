import axios from "axios";

const base_url = "https://api.tomonisolution.com";

const getTopProduct = () => {
  return axios.get(`${base_url}/api/top-products-for-sale`);
};

const getProduct = (params: object) => {
  return axios.get(`${base_url}/api/products`, params);
};

export { getTopProduct, getProduct };
