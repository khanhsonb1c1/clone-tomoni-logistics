import { getTopProduct } from "@/services/getAPI";
import { defineStore } from "pinia";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    top_products: {} as any,
    fetching: false,
  }),

  actions: {
    fetch() {
      return new Promise((resolve, reject) => {
        this.fetching = true;
        getTopProduct()
          .then(({ data }) => {
            this.top_products = data;
            this.fetching = false;
            resolve(data);
          })
          .catch((error) => {
            this.fetching = false;
            reject(error);
          });
      });
    },
  },
});
