<!-- 错误页面 -->
<template>
  <div :style="{height:pageheight+'px'}" style="width: 100%;background-color: #EBEEF5;text-align: center;">
    <h3 style="margin: 0px;padding: 120px 0px 0px 0px;">
      <font style="color: #909399;font-size: 10.0em;color: #F56C6C;">404</font>
    </h3>
    <h3 style="margin: 0px;padding: 10px 0px 0px 0px;">
      <font style="color: #909399;font-size: 1.5em;">页面找不到</font>
    </h3>
    <h3 style="margin: 0px;">
      <font style="color: #909399;font-size: 1.5em;">Page not found</font>
    </h3>
    <h3 style="margin: 0 auto 0;max-width: 700px;padding: 60px 0px 0px 0px;font-weight: normal;">
      <font style="color: #909399;font-size: 0.8em;letter-spacing: 0.1em;">您访问的页面不存在或者已被删除，请联系管理员进行处理</font>
      <font style="color: #909399;font-size: 0.8em;letter-spacing: 0.1em;color: #409EFF;">发送邮件到：cmaple@aliyun.com</font>
      <font style="color: #909399;font-size: 0.8em;letter-spacing: 0.1em;">，相关异常信息已经记录到日志系统当中，管理员将尽快处理</font>
    </h3>
    <!-- 按钮组 -->
    <h3 style="margin: 30px 0px 0px 0px;">
      <a icon="el-icon-s-promotion" style="font-size: 1em;font-weight: normal;" type="primary" href="/">返回首页</a>
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
      // 页面高度
      pageheight: '',
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
  },
  created() {
    //初始化静态参数
    //请求首页展示图片及内容路由
    //console.log(localStorage.getItem("cip")+'/'+localStorage.getItem("cname"));
  },
  destroyed() {},
  mounted() {
    //页面高度赋值
    window.onresize = () => {
      return (() => {
        this.getPageHeight()
      })()
    }
    this.getPageHeight()
  }
}
</script>
