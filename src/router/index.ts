import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from "../views/__layout.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "all",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/apply",
    name: "apply",
    beforeEnter: () =>
      (window.location.href = "https://forms.gle/LQwdyyU5hGJT2u9s6"),
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
