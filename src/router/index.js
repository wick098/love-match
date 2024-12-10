import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: () => import("@/views/analysis/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;