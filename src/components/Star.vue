<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="i in star" :key="i">
    <path
      d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
      fill="url(#paint0_linear_4531_177138)"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_4531_177138"
        x1="43.9999"
        y1="43.0023"
        x2="5.75441"
        y2="3.04089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F79009"></stop>
        <stop offset="1" stop-color="#FDB022"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "star-component",
  props: {
    star: {
      type: Number,
      default: 5,
    },
  },
});
</script>

<style scoped>
svg {
  height: 12px;
  width: 12px;
  margin-bottom: 2px;
}
</style>
