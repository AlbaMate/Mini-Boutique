import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import VetementsFilles from "../views/VetementsFilles.vue";
import VetementsGarcons from "../views/VetementsGarcon.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/views/vetements-filles", component: VetementsFilles },
  { path: "/views/vetements-garcons", component: VetementsGarcons },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
