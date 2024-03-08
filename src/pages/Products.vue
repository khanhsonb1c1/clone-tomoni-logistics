<template>
  <section class="promo-section ptb-100 mt-5">
    <div class="container">
      <div class="filter-category">
        <div class="item" v-for="item in categories" :key="item.id">
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="row equal" v-if="fetching">
        <cart-item-skeleton v-for="i in 8" :key="i" />
      </div>
      <div class="row equal" v-else>
        <product-cart v-for="item in list" :key="item.id" :item="item" />
      </div>
      <pagination :paginate="pagination" @change-page="changePage" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCart from "@/components/ProductCart.vue";
import CartItemSkeleton from "@/components/CartItemSkeleton.vue";
import { mapState } from "pinia";
import { productStore } from "@/stores/productStore";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "product-list-page",
  components: {
    ProductCart,
    CartItemSkeleton,
    Pagination,
  },
  data() {
    return {
      // query: {} as any,
      categories: [
        {
          name: "Chăm sóc sắc đẹp",
          id: "001",
        },
        {
          name: "Chăm sóc sức khoẻ",
          id: "006",
        },
        {
          name: "Thực phẩm",
          id: "026",
        },
      ],
    };
  },
  computed: {
    ...mapState(productStore, ["list", "fetching", "pagination"]),
    query() {
      return this.$route.query;
    },
  },
  watch: {
    query: {
      immediate: true,
      handler() {
        this.fetchProduct();
      },
    },
  },

  methods: {
    changePage(page: number) {
      this.$router.push({
        query: {
          page: page,
        },
      });
    },
    fetchProduct() {
      productStore().fetchProductList(this.query);
    },
  },
});
</script>

<style scoped lang="scss">
.filter-category {
  display: flex;
  .item {
    margin: 5px;
    span {
      border-radius: 12px;
      padding: 5px 15px;
      background: #2d9596;
      color: #f3f3f3;
      :hover {
        background: #174f50;
      }
    }
  }
}
</style>
