import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Negocio from '@/views/Negocio.vue';
import Tecnico from '@/views/Tecnico.vue';
import KPIs from '@/views/KPIs.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/negocio'
  },
  {
    path: '/negocio',
    name: 'Negocio',
    component: Negocio
  },
  {
    path: '/tecnico',
    name: 'Tecnico',
    component: Tecnico
  },
  {
    path: '/kpis',
    name: 'KPIs',
    component: KPIs
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
