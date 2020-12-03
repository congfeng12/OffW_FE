import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
  ],
  mode: 'history',
})
