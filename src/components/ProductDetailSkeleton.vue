<template>
  <div class="row skeleton-product-detail">
    <div class="col-lg-6 col-md-12 col-12">
      <div class="p-2">
        <div class="image skeleton"></div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-12">
      <div class="p-2">
        <h2 class="skeleton"></h2>
        <div class="option-1 mt-4 skeleton"></div>
        <div class="option-2 mt-5 skeleton"></div>
        <div class="option-2 mt-3 skeleton"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped lang="scss">
.skeleton-product-detail {
  h2 {
    height: 3em;
  }

  .image {
    width: 100%;
    aspect-ratio: 1/1;
  }

  .option-1 {
    height: 5em;
  }
  .option-2 {
    height: 8em;
  }
}
</style>
