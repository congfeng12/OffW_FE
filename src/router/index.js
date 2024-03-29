import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Service from '@/components/Service'
import Contact from '@/components/Contact'
import platform_signin from '@/components/platform_signin'
import platform_signup from '@/components/platform_signup'
import platform_home from '@/components/platform_home'
import platform_add from '@/components/platform_add'
import platform_article from '@/components/platform_article'
import platform_personal from '@/components/platform_personal'
import platform_editpd from '@/components/platform_editpd'
import platform_proposal from '@/components/platform_proposal'
import platform_advertisements from '@/components/platform_advertisements'
import platform_userseting from '@/components/platform_userseting'
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
      // 论坛主页
      path: '/platform_home',
      name: 'platform_home',
      component: platform_home
    },
    {
      // 发布帖子
      path: '/platform_add',
      name: 'platform_add',
      component: platform_add
    },
    {
      // 文章内容
      path: '/platform_article',
      name: 'platform_article',
      component: platform_article
    },
    {
      // 个人中心
      path: '/platform_personal',
      name: 'platform_personal',
      component: platform_personal
    },
    {
      // 编辑个人资料
      path: '/platform_editpd',
      name: 'platform_editpd',
      component: platform_editpd
    },
    {
      // 投诉建议
      path: '/platform_proposal',
      name: 'platform_proposal',
      component: platform_proposal
    },
    {
      // 广告申请
      path: '/platform_advertisements',
      name: 'platform_advertisements',
      component: platform_advertisements
    },
    // 用户设置
    {
      // 广告申请
      path: '/platform_userseting',
      name: 'platform_userseting',
      component: platform_userseting
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
