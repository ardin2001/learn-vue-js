import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OptionView from "@/views/OptionView.vue";
import EventHandling from "@/views/EventHandling.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/option",
      name: "option",
      component: OptionView,
    },
    {
      path: "/handling",
      name: "handling",
      component: EventHandling,
    },
  ],
});

export default router;
