import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('./views/Index.vue');
const About = () => import('./views/About.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to === from) {
      return savedPosition;
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ]
})
