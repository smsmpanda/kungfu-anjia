import { createApp } from 'vue';
import createcApp from '../src/page/createc/App.vue';
import router from './router';


import '~/styles/style.css';
import "~/styles/index.scss";


createApp(createcApp).use(router).mount('#app');
