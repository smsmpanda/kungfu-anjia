import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/h', component: () => import('../../src/views/layout/login.vue') },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'ym-nav-active'
});