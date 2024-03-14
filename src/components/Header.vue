<template>
  <header class="header">
    <!--start navbar-->
    <nav class="navbar navbar-expand-lg fixed-top" style="background: #b6ebfc">
      <div class="container">
        <RouterLink class="navbar-brand" to="/"
          ><img src="../../public/img/tomonivn-logo.png" width="160" alt="logo" class="img-fluid"
        /></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="ti-menu"></span>
        </button>

        <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="(item, index) in menu" :key="index">
              <RouterLink class="nav-link page-scroll" :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <RouterLink to="/products" class="btn google-play-btn mr-3">SẢN PHẨM</RouterLink>
          </ul>
        </div>
      </div>
    </nav>
    <!--end navbar-->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header-component",
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
          name: "Đánh giá",
          path: "/#reviews",
        },
        {
          name: "Liên hệ",
          path: "/#contact",
        },
      ],
    };
  },
});
</script>

<style></style>
