import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsConditions from '../views/TermsConditions.vue';
import License from '../views/License.vue';
import Technical from '../views/Technical.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/technical',
    name: 'Technical',
    component: Technical
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms',
    name: 'TermsConditions',
    component: TermsConditions
  },
  {
    path: '/license',
    name: 'License',
    component: License
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
});

export default router;
