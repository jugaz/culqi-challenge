import { createRouter, createWebHistory } from 'vue-router'
import { lazyView } from "@/composables/useShared";

const HomeView = lazyView("HomeView");
const RechargeView = lazyView("RechargeView");
const ErrorView401 = lazyView("ErrorView401");

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
      path: '/error401',
      name: 'error401',
      component: () => ErrorView401
    },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ]
})

export default router
