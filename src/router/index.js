import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/newpost",
    name: "newpost",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateBlogPost.vue"),
  },
  {
    path: "/blogs/:id",
    name: "BlogPostDetail",
    component: () => import("../views/blogs/BlogPostDetail.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/blogs/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
