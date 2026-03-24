// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// const routes = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/about",
//     component: About,
//   },
// ];
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

let routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
