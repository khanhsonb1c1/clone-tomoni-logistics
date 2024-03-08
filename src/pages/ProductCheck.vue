<template>
  <section class="promo-section ptb-100 mt-5 gray-bg" v-if="is_error">
    <div class="container white-bg">
      <div class="error-content text-center">
        <div class="notfound-404"><h3 class="text-uppercase">Sản phẩm không tồn tại</h3></div>
        <p>
          Xin lỗi, sản phẩm này không tồn tại trong hệ thống của chúng tôi. Vui lòng kiểm tra lại hoặc liên hệ với bộ
          phận hỗ trợ khách hàng để biết thêm thông tin chi tiết. Xin cảm ơn!
        </p>
        <router-link class="btn app-store-btn" to="/">Về trang chủ</router-link>
      </div>
    </div>
  </section>

  <product-detail :detail="check_product.product" v-else>
    <template #check_info>
      <div class="info row">
        <div class="col-lg-4"><p>Nhà cung cấp:</p></div>
        <div class="col-lg-8">
          <span> {{ check_product.supplier?.name }} </span>
        </div>
      </div>
      <div class="info row" v-if="check_product.code">
        <div class="col-lg-4"><p>Lô sản phẩm:</p></div>
        <div class="col-lg-8">
          <span> {{ check_product.code }} </span>
        </div>
      </div>
      <div class="info row">
        <div class="col-lg-4"><p>Ngày mua:</p></div>
        <div class="col-lg-8">
          <loading-mini v-if="fetch_checked" />
          <span class="text-danger"> {{ date_checked }} </span>
        </div>
      </div>

      <div class="info row">
        <div class="col-lg-4"><p>Ngày hết hạn:</p></div>
        <div class="col-lg-8">
          <span> {{ check_product.expiry_date }} </span>
        </div>
      </div>

      <div class="noti" v-if="date_checked">
        <span>Sản phẩm đã được mua</span>
      </div>
    </template>
  </product-detail>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { productStore } from "@/stores/productStore";
import ProductDetail from "@/components/ProductDetail.vue";
import LoadingMini from "@/components/LoadingMini.vue";
import { checkCode } from "@/services/getAPI";

export default defineComponent({
  name: "product-detail-page",
  components: { ProductDetail, LoadingMini },
  data() {
    return {
      is_error: false,
      date_checked: "",
      fetch_checked: false,
    };
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    ...mapState(productStore, ["check_product", "fetching"]),
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        productStore()
          .fetchCheckInfo(this.id)
          .then((data: any) => {
            if (!data.checked) {
              this.handleCheckCode();
            } else {
              this.date_checked = data.checked;
            }
            this.is_error = false;
          })
          .catch(() => {
            this.is_error = true;
          });
      },
    },
  },

  methods: {
    handleCheckCode() {
      this.fetch_checked = true;
      this.date_checked = "";
      checkCode(this.id)
        .then(({ data }) => {
          this.fetch_checked = false;
          this.date_checked = data.checked;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //
  },
});
</script>

<style scoped lang="scss">
.noti {
  margin-top: 1.5em;
  span {
    background: #de3e3e;
    padding: 1em 2em;
    color: #fff;
    font-weight: 500;
  }
}
</style>
