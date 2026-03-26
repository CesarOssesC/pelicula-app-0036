import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import ActoresView from '@/views/ActoresView.vue'
import GenerosView from '@/views/GenerosView.vue'
import PeliculasView from '@/views/PeliculasView.vue'
import DetallePelicula from '@/views/DetallePelicula.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

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
      path: '/peliculas/:id',
      component: DetallePelicula,
      meta: { requiresAuth: true }
    },
    {
      path: '/actores',
      component: ActoresView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/generos',
      component: GenerosView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/register',
      component: RegisterView
    },
    {
      path: '/login',
      component: LoginView
    }
  ],
})

router.beforeEach((to) => {
  const user = store.state.user
  const rol = store.state.rol

  if (to.meta.requiresAuth && !user) {
    store.commit('setErrorMessage', 'Debes estar logeado para acceder a esta página')
    return '/login'
  }

  if (to.meta.requiresAdmin && rol !== 'admin') {
    store.commit('setErrorMessage', 'No tienes autorización para ver esta página')
    return '/peliculas'
  }
})

export default router
