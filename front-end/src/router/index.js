import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/budget",
    name: "Budget",
    component: () => import("../views/BudgetView.vue"),
  },
  {
    path: "/planner",
    name: "Planner",
    component: () => import("../views/PlannerView.vue"),
  },
  {
    path: "/debts",
    name: "Debts",
    component: () => import("../views/DebtsView.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/SettingsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
