
import { createRouter, createWebHistory } from 'vue-router';
import HomeInfo from '../views/HomeInfo.vue';
import CataloguePage from '@/views/CataloguePage.vue';
import ImageCard from '@/components/ImageCard.vue';
import VetementsFille from '@/components/VetementsFille.vue';
import VetementsGarcon from '@/components/VetementsGarcon.vue';
// import VetementsFille from '@/components/VetementsFille.vue';
// import VetementsGarcon from '@/components/VetementsGarcon.vue';

const routes = [
  {
    path: '/',
    name: 'HomeInfo',
    component: HomeInfo
  },
  {
    path: '/',
    name: 'Catalogue',
    component: CataloguePage
  },
  {
    path: '/',
    name: 'ImageCard',
    component: ImageCard
  },
  {
    path: '/VetementsFille',
    name: 'VetementsFille',
    component: VetementsFille
  },
  {
    path: '/vetementsGarcon',
    name: 'VetementsGarcon',
    component: VetementsGarcon
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
