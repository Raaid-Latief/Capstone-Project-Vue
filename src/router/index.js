import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("../views/Programs.vue"),
  },
  {
    path: "/plans",
    name: "plans",
    component: () => import("../views/Plans.vue"),
  },
 
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },


];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
