import { createRouter, createWebHistory } from 'vue-router'
import { lazyView } from "@/composables/useShared";

const HomeView = lazyView("HomeView");
const RechargeView = lazyView("RechargeView");
const ErrorView = lazyView("ErrorView");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: RechargeView
    },
    {
      path: '/error-401',
      name: 'error-401',
      component: ErrorView 
    },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ]
})

export default router
