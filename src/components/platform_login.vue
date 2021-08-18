<template>
  <div style="width: 100%;background-color: #303133;height: 100%">
    <div v-bind:style="{height:pageheight+'px'}" style="width: 100%;">
      <div style="width:1024px;margin:0 auto 0;">
        <!-- 页头 -->
        <div style="width:100%;height:100px;">
          <!-- 主页图标 -->
          <div style="width: 50px;height: 50px;float: left;margin-top:10px;">
            <a href="/" style="text-decoration: none;">
              <img style="width: 40px;" src="../../static/logo.png">
            </a>
          </div>
          <!-- 注册按钮 -->
          <a id="menu_font" href="/ContactPageUrl" style="text-decoration: none;">
            <div>
              <font>注册</font>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //name: 'HelloWorld',
  data() {
    return {
      pageheight:'',
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    created() {
    //页面地址列表

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
}
</script>
<style type="text/css">
  /* 导航栏字体 */
  #menu_font{
    display: block
  }
  #menu_font font {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
  }
  #menu_font font:hover {
    color: #909399;
    font-size: 18px;
    font-weight: 900;
  }

  /*  */
  #menu_font_div div{
    width: 56px;
    height: 30px;
    float: right;
    padding: 5px 0px 0px 0px;
    margin: 10px 0px 0px 0px;
    border:1px solid #FFFFFF;
    border-radius: 7px;
  }
  #menu_font_div div:hover{
    width: 56px;
    height: 30px;
    float: right;
    padding: 5px 0px 0px 0px;
    margin: 10px 0px 0px 0px;
    border:1px solid #909399;
    border-radius: 7px;
  }
</style>
