<template>
  <section id="screenshots" class="screenshots-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center">
            <h2>App Screenshots</h2>
            <p class="lead">Eazee Logistics Provides Real-Time Easy Tracking of Shipment from Pick-Up to Delivery</p>
          </div>
        </div>
      </div>
      <!--start app screen carousel-->
      <div class="screen-slider-content mt-5">
        <!-- <div class="screenshot-frame"></div> -->
        <div class="screen-carousel owl-carousel owl-theme dot-indicator">
          <img src="/public/img/01.png" class="img-fluid" alt="screenshots" />
          <img src="/public/img/02.png" class="img-fluid" alt="screenshots" />
          <img src="/public/img/03.png" class="img-fluid" alt="screenshots" />
          <img src="/public/img/04.png" class="img-fluid" alt="screenshots" />
          <img src="/public/img/05.png" class="img-fluid" alt="screenshots" />
          <img src="/public/img/06.png" class="img-fluid" alt="screenshots" />
        </div>
      </div>
      <!--end app screen carousel-->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "about-component",
});
</script>

<style></style>
