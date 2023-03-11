import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Person from "../views/Person.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/person/:id",
    name: "PersonChat",
    component: Person,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  linkExactActiveClass: "active",
  routes,
});

export default router;
