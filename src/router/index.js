import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Service from '@/components/Service'
import Contact from '@/components/Contact'
import err_404 from '@/components/err_404'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      //当访问了不存在的路由的时候
      path: '*',
      name: 'err_404',
      component: err_404,
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
