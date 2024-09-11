import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OptionView from "@/views/OptionView.vue";
import EventHandling from "@/views/EventHandling.vue";
import ListRendering from "@/views/ListRendering.vue";
import ComputedProperties from "@/views/ComputedProperties.vue";
import ClassStyleBinding from "@/views/ClassStyleBinding.vue";
import FetchAPI from "@/views/FetchAPI.vue";

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
    {
      path: "/list-rendering",
      name: "list-rendering",
      component: ListRendering,
    },
    {
      path: "/computed-properties",
      name: "computed-properties",
      component: ComputedProperties,
    },
    {
      path: "/class-style-binding",
      name: "class-style-binding",
      component: ClassStyleBinding,
    },
    {
      path: "/fetch-api",
      name: "fetch-api",
      component: FetchAPI,
    },
  ],
});

export default router;
