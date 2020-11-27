<template>
  <div class="hello">
    <!-- 官网首页展示头 - 覆盖整个打开的浏览器页面 -->
    <div id="homepage_font" :style="{height:pageheight+'px'},{backgroundImage:'url('+homepageImgUrl+')'}">
      <!-- 官网LOGO -->
      <div style="width: 50px;height: 50px;float: left;margin: 10px 0px 0px 20px;">
        <img style="width: 50px;" src="../../static/logo.png">
      </div>
       <!-- 微信公众号等图标 -->
        <div style="width: 50px;height: 50px;float: right;margin: 20px 20px 0px 0px;">
          <!-- <a href="javascript:void(0)" @click="WeChartVisible = true"> -->
            <img style="width: 30px;" src="../../static/wechat.png">
          <!-- </a> -->
        </div>
      <!-- 导航栏 -->
      <div id="menu">
            <!-- 加入我们 -->
            <div style="float: right;padding: 4px 0px 0px 0px;">
              <a :href="HomePageUrl" style="text-decoration: none;">
                <font id = "menu_font">加入我们</font>
              </a>
            </div>
            <!-- 联系我们 -->
            <div style="float: right;padding: 4px 80px 0px 0px;">
              <a :href="HomePageUrl" style="text-decoration: none;">
                <font id = "menu_font">联系我们</font>
              </a>
            </div>
            <!-- 服务领域 -->
            <div style="float: right;padding: 4px 80px 0px 0px;">
              <a :href="HomePageUrl" style="text-decoration: none;">
                <font id = "menu_font">服务领域</font>
              </a>
            </div>
            <!-- 关于CMAPLE -->
            <div style="float: right;padding: 4px 80px 0px 0px;">
              <a :href="HomePageUrl"  id = "menu_font" style="text-decoration: none;">
                <font id = "menu_font">关于CMAPLE</font>
              </a>
            </div>
        </div>
        <!-- 约束宽度 -->
        <div style="width: 1200px;margin:0 auto 0;" :style="{height:pageheight - 50 +'px'}">
          <div style="width: 1200px;height: 40px;position: absolute;bottom: 22%;">
            <a :href="HomePageUrl" id = "main_font_a">
              <font>了解更多</font>
            </a>
          </div>
           <!-- 向下标记 -->
          <div style="width: 1200px;height: 40px;  position: absolute;bottom: 10px;">
            <a href="" title="">
              <img id="bottom_img" src="../../static/bottom.png">
            </a>
          </div>
        </div>
    </div>
    <!-- 官网说明 - 描述网站和工作室的内容 -->
    <div style="width: 100%;">
      <!-- 限宽 -->
      <div style="width: 1024px;margin: 0 auto 0;">
        <!-- 关于CMAPLE.CN -->
        <div style="width: 100%;display: inline-block;vertical-align: top;">
          <div style="text-align: left;padding: 80px 0 0 0;">
            <font style="font-size: 30px;font-weight: 600;">关于CMAPLE.CN</font> 
          </div>
          <div style="text-align: left;padding: 30px 80px 0px 0;">
            <font style="">
              CMAPLE.CN致力于让网站的搭建变的更加轻松快捷，让个人网站的普及成为可能。
            </font>
          </div>
          <div style="text-align: left;padding: 20px 80px 0px 0;">
            <font style="">
              CMAPLE.CN主要业务范围也为网站搭建&第三方插件/程序的开发。我们将尝试简单快捷的图形化网站开发程序，但是如果我们的工作可以帮助其他人实现这一目标，我们也将认为我们的使命已经实现。
            </font>
          </div>
          <div style="text-align: left;padding: 30px 0px 0px 0;">
            <a :href="HomePageUrl" id = "about_font_a">
              <font>了解更多详细信息</font>
            </a>
          </div>
          <div style="padding: 40px 0px 80px 0;">
            <img style="width: 100%;border-radius:20px;" src="../../static/homepage_about.jpg">
          </div>
        </div>
        
      </div>
    </div>
    <!-- 页脚 - 导航栏 -->
    <div style="">
      
    </div>
    <!-- 页脚 -->
  </div>
</template>

<script>
export default {
  //name: 'HelloWorld',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
      pageheight:'',
      HomePageUrl:"/",
      homepageImgUrl:'../../static/background.jpg',
    }
  },
   methods:{
    getPageHeight(){
      this.pageheight = window.innerHeight;
    }
  },
  created(){
    //页面地址列表
    // this.HomePageUrl="/"
    // this.AboutHZPageUrl="/about_HZ"
    // this.AboutWHPageUrl="/about_WH"
    // this.AboutPageUrl="/about"
    //请求首页展示图片及内容路由
  },
  destroyed(){
  },
  mounted(){
    window.onresize = () =>{
      return(()=>{
        this.getPageHeight()
      }
        )()
      }
        this.getPageHeight()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 官网页头展示 */
  #homepage_font{
    width: 100%;
    background-size:cover;
    background-color: #000000;
  }
  #menu{
    width: 610px;
    height: 30px;
    margin:0 auto 0;
    padding-top: 25px;
  }
  /* 导航栏字体 */
  #menu_font{
    color: #FFFFFF;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 900;
  }
  /* 导航栏字体 鼠标悬浮之后 */
  #menu_font:hover{
    color: #FFFFFF;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 900;
  }
  /* 主页展示内容链接 */
  #main_font_a{
    color: #409EFF;
    font-size: 20px;
    letter-spacing: 0.2em;
    padding-bottom: 2px;
    font-weight: 900;
    text-decoration:none;
  }
   /* 主页展示内容链接 鼠标悬浮之后 */
   #main_font_a:hover{
    color: #409EFF;
    font-size: 20px;
    letter-spacing: 0.2em;
    font-weight: 900;
    border-bottom: 2px solid #409EFF;
  }
  /*  */
  #about_font_a{
    color: #409EFF;
    font-size: 16px;
    letter-spacing: 0.1em;
    padding-bottom: 2px;
    font-weight: 900;
    text-decoration:none;
  }
  /*  */
  #about_font_a:hover{
   color: #409EFF;
    font-size: 16px;
    letter-spacing: 0.1em;
    font-weight: 900;
    border-bottom: 2px solid #409EFF;
  }
  /* 主页展示内容向下标记图标 */
  #bottom_img{
    position: absolute;
    margin:0 auto;
    left: 50px;
    right: 50px;
    top: 5px;
    width: 30px;
  }
  /* 主页展示内容向下标记图标 鼠标悬浮之后 */
   #bottom_img:hover{
    position: absolute;
    margin:0 auto;
    left: 50px;
    right: 50px;
    top: 8px;
    width: 30px;
  }
  
</style>
