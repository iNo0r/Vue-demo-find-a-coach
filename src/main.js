import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [{ path: 'contact', component: null }] // /coaches/c1/contact
    },
    { path: '/register', component: null },
    { path: '/requests', component: null },

    { path: '/:catchAll(.*)', component: null }
  ]
});

app.use(router);

app.mount('#app');
