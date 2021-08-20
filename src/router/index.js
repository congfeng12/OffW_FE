import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Service from '@/components/Service'
import Contact from '@/components/Contact'
import platform_signin from '@/components/platform_signin'
import platform_signup from '@/components/platform_signup'
import err_404 from '@/components/err_404'

Vue.use(Router)

export default new Router({
  routes: [{
      // 主页
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      // 关于页面
      path: '/About',
      name: 'About',
      component: About
    },
    {
      // 服务页面
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      // 联系我们页面
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      // 论坛登陆页面
      path: '/platform_signin',
      name: 'platform_signin',
      component: platform_signin
    },
    {
      // 论坛注册页面
      path: '/platform_signup',
      name: 'platform_signup',
      component: platform_signup
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
