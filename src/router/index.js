import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'
import Guidelines from '../views/Guidelines.vue'
import About from '../views/About.vue'
//import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  //{
  //  path:'/',
  //  redirect: `/${i18n.locale}`
  //},
 // {
  //  path: '/:lang',
  //  component: {
  //    render(c) {return c('router-view') }
  //  },
  //  children: [
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
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
      }
    //]
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
