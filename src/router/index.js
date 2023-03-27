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
    component: () => import("../views/CreateBlogPost.vue"),
  },
  {
    path: "/edit:id",
    name: "EditBlogPost",
    component: () => import("../views/EditBlogPost.vue"),
    props: true,
  },
  {
    path: "/blogs/:id",
    name: "BlogPostDetail",
    component: () => import("../views/blogs/BlogPostDetail.vue"),
    props: true,
  },
  {
    path: "/blogs",
    name: "AllBlogList",
    component: () => import("../views/blogs/Index.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
