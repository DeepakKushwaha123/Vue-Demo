import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Landing from "../views/Landing.vue";
import Demo from "../views/Demo.vue";
import PostDetails from "../views/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/post-details/:id",
    name: "post-details",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
