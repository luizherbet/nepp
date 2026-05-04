import { createRouter, createWebHistory } from 'vue-router'
import EquipoView from '../views/EquipoView.vue'
import HomeView from '../views/HomeView.vue'
import InvestigacionesView from '../views/InvestigacionesView.vue'
import PublicacionesView from '../views/PublicacionesView.vue'
import QuienesSomosView from '../views/QuienesSomosView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView },
  { path: '/quienes-somos', name: 'quienes-somos', component: QuienesSomosView },
  { path: '/equipo', name: 'equipo', component: EquipoView },
  { path: '/investigaciones', name: 'investigaciones', component: InvestigacionesView },
  { path: '/publicaciones', name: 'publicaciones', component: PublicacionesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
