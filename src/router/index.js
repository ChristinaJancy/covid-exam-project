import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'
import Guidelines from '../views/Guidelines.vue'
import Dailydevelopments from '../views/Dailydevelopments.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/guidelines',
    name: 'Guidelines',
    component: Guidelines
  },
  {
    path: '/dailydevelopments',
    name: 'Dailydevelopments',
    component: Dailydevelopments
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
