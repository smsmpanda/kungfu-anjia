import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/layout/login.vue';

const routes = [
  { path: '/', component: login },
  {
    path: '/home',
    component: () => import('../views/layout/home.vue'),
    redirect: '/home/daily',
    children: [
      { path: 'daily', component: () => import('../views/daily/index.vue') },
      { path: 'travel', component: () => import('../views/travel/index.vue') },
      { path: 'sport', component: () => import('../views/sport/index.vue') }
    ]
  }
  // { path: '/city/:cityType', component: () => import('../views/city.vue') },
  // { path: '/city', redirect: '/city/beijing' },
  // { path: '/:pathMatch(.*)*', component: () => import('../views/notfound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'ym-menu-active'
});

export default router;
