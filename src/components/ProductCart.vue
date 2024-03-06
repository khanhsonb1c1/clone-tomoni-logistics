<template>
  <div class="col-md-3 col-lg-3 mt-3 mb-2">
    <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg h-100">
      <div class="discount" v-if="item.tax_percent">
        <span>{{ item.tax_percent }}%</span>
      </div>
      <div class="circle-icon mb-3">
        <!-- <span class="ti-eye text-white"></span> -->
        <img :src="item.image_url" alt="logo" />
      </div>
      <p class="text-left">{{ item.categories[0].name || "Sản phẩm HOT" }}</p>

      <h5 class="text-truncate-2 text-left">{{ item.name }}</h5>
      <div class="d-flex">
        <text-money-inital :amount="item.initial_price" v-if="item.tax_percent" class="mr-2" />
        <text-money :amount="item.price" color="dark" class="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextMoney from "./TextMoney.vue";
import TextMoneyInital from "./TextMoneyInital.vue";
export default defineComponent({
  components: { TextMoney, TextMoneyInital },

  name: "product-cart-component",
  props: {
    item: {
      required: true,
    },
  },
});
</script>

<style scoped>
h5 {
  font-size: 1em;
}
.single-promo {
  padding: 3em 2em;
  position: relative;
  /* background: white; */
}
p {
  margin-bottom: 0.5em;
}
img {
}
</style>
