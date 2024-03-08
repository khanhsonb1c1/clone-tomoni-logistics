<template>
  <banner />
  <products />
  <!-- <services /> -->
  <!-- <highlight /> -->
  <!-- <Activity /> -->
  <about />

  <contact />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "@/components/Banner.vue";
// import Services from "@/components/Services.vue";
// import Highlight from "@/components/Highlight.vue";
// import Activity from "@/components/Activity.vue";
import Contact from "@/components/Contact.vue";
import Products from "@/components/Products.vue";
import About from "@/components/About.vue";

export default defineComponent({
  components: { Banner, 
  // Services, Highlight, Activity, 
  Contact, Products, About },
 
});
</script>

<style></style>
