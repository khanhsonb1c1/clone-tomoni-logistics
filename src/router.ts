import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomePage from "./pages/HomePage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    
  
  ],

//   scrollBehavior() {
//     // always scroll to top
//     return { top: 0 };
//   },
});
router.afterEach((to) => {
  nextTick(() => {
    document.title = (to.meta.title || to.name) + " | " + import.meta.env.VITE_APP_NAME;
  });
});

export default router;
