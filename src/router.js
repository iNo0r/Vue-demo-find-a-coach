import { createRouter, createWebHistory } from 'vue-router';

import CoachDeatil from './components/pages/coaches/CoachDetail.vue';
import CoachList from './components/pages/coaches/CoachList.vue';
import Coachregistration from './components/pages/coaches/Coachregistration.vue';
import ContactCoach from './components/pages/requests/ContactCoach.vue';
import RequestRecieved from './components/pages/requests/RequestReceived.vue';
import NotFound from './components/pages/NotFound.vue';

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
