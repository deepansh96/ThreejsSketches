import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: {
      name: "App",
    },
  },
  {
    path: "/home",
    name: "App",
    component: () => import(/* webpackChunkName: "home" */ "@/App.vue")
  },
  {
    path: "/sketch/:canvasName",
    name: "Sketch",
    component: () => import(/* webpackChunkName: "sketch" */ "@/components/Sketch.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
export { routes };
