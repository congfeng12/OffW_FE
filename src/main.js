// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局属性组建
import Config from './ConfigAttributes.vue';
//引入消息提示插件vue-notification
import Notifications from 'vue-notification'

Vue.config.productionTip = false
//注册全局属性组件
Vue.prototype.$Config = Config;
//消息提示插件
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
