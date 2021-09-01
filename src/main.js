// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局属性组建
import Config from './ConfigAttributes.vue';
//引入消息提示插件vue-notification
import Notifications from 'vue-notification'
//引入axios
import axios from 'axios';
//引入QS
import qs from 'qs';
// 引入quill
import VueQuillEditor from 'vue-quill-editor';

// 引入css文件
// quill
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.config.productionTip = false;
//注册全局属性组件
Vue.prototype.$Config = Config;
//注册axios
Vue.prototype.$Axios = axios;
//注册qs
Vue.prototype.$qs = qs;
//消息提示插件
Vue.use(Notifications);
// quill
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
