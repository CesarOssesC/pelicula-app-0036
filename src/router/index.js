import { createRouter, createWebHistory } from 'vue-router'
import ActoresView from '@/views/ActoresView.vue'
import GenerosView from '@/views/GenerosView.vue'
import PeliculasView from '@/views/PeliculasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/peliculas'
    },
    {
      path: '/peliculas',
      component: PeliculasView
    },
    {
      path: '/actores',
      component: ActoresView
    },
    {
      path: '/generos',
      component: GenerosView
    }
  ],
})

export default router
