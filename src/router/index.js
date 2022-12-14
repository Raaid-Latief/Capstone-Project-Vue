import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("../views/ProgramsView.vue"),
  },
  {
    path: '/program/:id',
    name: 'program',
    component: () => import('../views/SingleProgramView.vue'),
    props: true,
  },
  
  {
    path: "/admin",
    name: "admin",
    component: ()=> import("../views/AdminView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: ()=> import("../views/LoginView.vue"),
  },
  {   
    path: "/register",
    name: "register",
    component: ()=> import("../views/RegisterView.vue"),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/adminProgram',
    name: 'adminProgram',
    component: () => import('../views/AdminProgramsView.vue')
  },
  {
    path: '/adminUser',
    name: 'adminUser',
    component: () => import('../views/AdminUsersView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;