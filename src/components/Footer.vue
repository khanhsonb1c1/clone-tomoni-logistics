<template>
  <!--footer section start-->
  <footer class="footer-section">
    <!--footer top start-->
    <div class="footer-top pt-100 background-img-2" style="background: #354154">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12 col-lg-3 col-12 mb-4 mb-md-4 mb-sm-4 mb-lg-0 p-0">
            <div class="footer-nav-wrap text-white text-center">
              <img src="../../public/img/logo-sm.png" alt="footer logo" width="60" class="img-fluid mb-2" />
              <p style="margin-bottom: 0">công ty TNHH</p>
              <p style="font-size: 1.4em; font-weight: 500">TomoniVN</p>

              <div class="social-list-wrap">
                <ul class="social-list list-inline list-unstyled">
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Facebook"><span class="ti-facebook"></span></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Twitter"><span class="ti-twitter"></span></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Instagram"><span class="ti-skype"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-2 col-6">
            <div class="footer-nav-wrap text-white">
              <h5 class="mb-3 text-white">Hỗ trợ</h5>
              <ul class="list-unstyled support-list">
                <li class="mb-2 d-flex align-items-center">
                  <span class="ti-location-pin mr-2"></span>
                  15 Bùi Kỷ, Cẩm Lệ, Đà Nẵng.
                </li>
                <li class="mb-2 d-flex align-items-center">
                  <span class="ti-mobile mr-2"></span> <a href="tel:19002149">1900.2149</a>
                </li>
                <li class="mb-2 d-flex align-items-center">
                  <span class="ti-email mr-2"></span><a href="mailto:info@tomonivn.com">info@tomonivn.com</a>
                </li>
                <li class="mb-2 d-flex align-items-center">
                  <span class="ti-time mr-2"></span><a href="mailto:info@tomonivn.com">Thứ 2 - Thứ 6</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-2 col-6">
            <div class="footer-nav-wrap text-white">
              <h5 class="mb-3 text-white">Giới thiệu</h5>
              <ul class="list-unstyled">
                <li class="mb-2" v-for="(item, index) in menu" :key="index">
                  <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-2 col-6">
            <div class="footer-nav-wrap text-white">
              <h5 class="mb-3 text-white">Sản phẩm</h5>
              <ul class="list-unstyled">
                <li class="mb-2" v-for="(item, index) in categories" :key="index">
                  <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 col-6 partner">
            <div class="footer-nav-wrap text-white">
              <h5 class="mb-3 text-white">Đối tác</h5>
              <ul class="list-unstyled support-list">
                <li class="mb-2 d-flex align-items-center" v-for="(item, idx) in partner" :key="idx">
                  <img :src="item.img" alt="" />
                  <!-- <a href="#">{{ item.name }}</a> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--footer bottom copyright start-->
      <div class="footer-bottom border-gray-light mt-5 py-3">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <span class="mb-0 text-white">© Design by Tomonivn</span>
            </div>
          </div>
        </div>
      </div>
      <!--footer bottom copyright end-->
    </div>
    <!--footer top end-->
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import orihiroImg from "../../public/img/orihiro-logo.png";
import kumanoImg from "../../public/img/kumano-logo.png";
import chinoshioyaImg from "../../public/img/logo-chinoshioya.png";

export default defineComponent({
  name: "footer-component",
  data() {
    return {
      menu: [
        {
          name: "Trang chủ",
          path: "/",
        },
        {
          name: "Dịch vụ",
          path: "/#services",
        },
        {
          name: "Giới thiệu",
          path: "/#about",
        },
        {
          name: "Liên hệ",
          path: "/#contact",
        },
      ],

      partner: [
        {
          name: "ORIHIRO",
          img: orihiroImg,
        },
        {
          name: "KUMANO",
          img: kumanoImg,
        },
        {
          name: "chinoshioya",
          img: chinoshioyaImg,
        },
      ],

      categories: [
        {
          name: "Tất cả",
          path: "/products",
        },
        {
          name: "Chăm sóc tóc",
          path: "/products?filter[categories]=003",
        },
        {
          name: "Chăm sóc da",
          path: "/products?filter[categories]=002",
        },
        {
          name: "Thực phẩm",
          path: "/products?filter[categories]=026",
        },
        {
          name: "Thực phẩm chức năng",
          path: "/products?filter[categories]=008",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.partner {
  li {
    width: 65%;
    padding: 0.3em;
    border-radius: 3px;
    background: #f3f3f3;
  }
  img {
    width: 100%;
    min-height: 30px;
  }
}
</style>
