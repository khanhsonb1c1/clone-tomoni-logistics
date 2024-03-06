<template>
  <section id="features" class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 style="color: #06b5e4 !important">App Features</h2>
            <p class="lead">Eazee Logistics Mobile App Features.</p>
          </div>
        </div>
      </div>
      <div class="row equal">
        <div class="col-md-3 col-lg-3">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <div class="circle-icon mb-3">
              <!-- <span class="ti-vector text-white"></span> -->
              <img src="img/delivery-man.svg" width="60" alt="logo" />
            </div>
            <h5>Add Bikes</h5>
            <p>Secure way to add bikes and manage the riders.</p>
          </div>
        </div>
        <div class="col-md-3 col-lg-3">
          <div
            class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100"
            style="background-color: #f8f8f8"
          >
            <div class="circle-icon mb-3">
              <!-- <span class="ti-lock text-white"></span> -->
              <img src="img/box.svg" width="60" alt="logo" />
            </div>
            <h5>Assign Orders</h5>
            <p>Flexible and simple way to assign orders to riders and manage the orders assigned.</p>
          </div>
        </div>
        <div class="col-md-3 col-lg-3">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <div class="circle-icon mb-3">
              <!-- <span class="ti-eye text-white"></span> -->
              <img src="img/map.svg" width="60" alt="logo" />
            </div>
            <h5>Map</h5>
            <p>Flexible map directions for easy pickup and delivery of orders.</p>
          </div>
        </div>
        <div class="col-md-3 col-lg-3">
          <div
            class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100"
            style="background-color: #f8f8f8"
          >
            <div class="circle-icon mb-3">
              <!-- <span class="ti-eye text-white"></span> -->
              <img src="img/valid.svg" width="60" alt="logo" />
            </div>
            <h5>Payment</h5>
            <p>Flexible payment options for orders and riders.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "services-component",
});
</script>

<style></style>
