import Vue from 'vue'
import VueRouter from 'vue-router'
import accueil from '../views/accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: accueil
  },
  {
    path: '/tarif',
    name: 'tarif',
    component: () => import(/* webpackChunkName: "about" */ '../views/tarif.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
