import { createRouter, createWebHistory } from 'vue-router';

import CoachDeatil from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import Coachregistration from './pages/coaches/Coachregistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecieved from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDeatil,
      children: [{ path: 'contact', component: ContactCoach }] // /coaches/c1/contact
    },
    { path: '/register', component: Coachregistration },
    { path: '/requests', component: RequestRecieved },

    { path: '/:catchAll(.*)', component: NotFound }
  ]
});
