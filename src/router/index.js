import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/layout/login.vue';

const routes = [
  { path: '/', component: () => import('../views/recommend/index.vue') },
  { path: '/follow', component: () => import('../views/follow/index.vue') },
  { path: '/hot', component: () => import('../views/hot/index.vue') },
  { path: '/video', component: () => import('../views/video/index.vue') },
  { path: '/register', component: () => import('../views/layout/register.vue') },
  { path: '/resetpwd', component: () => import('../views/layout/resetpwd.vue') },
  { path: '/create', component: () => import('../page/createc/App.vue') },
  // { path: '/city/:cityType', component: () => import('../views/city.vue') },
  // { path: '/city', redirect: '/city/beijing' },
  // { path: '/:pathMatch(.*)*', component: () => import('../views/notfound.vue') },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'ym-nav-active'
});