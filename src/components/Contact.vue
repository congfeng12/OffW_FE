<!-- 联系也民 -->
<template>
  <div class="hello">
    <!-- 官网首页展示头 - 覆盖整个打开的浏览器页面 -->
    <div id="homepage_font" :style="{height:pageheight+'px'},{backgroundImage:'url('+ContactImgUrl+')'}">
      <!-- 官网LOGO -->
      <div style="width: 50px;height: 50px;float: left;margin: 10px 0px 0px 20px;">
        <a :href="HomePageUrl" style="text-decoration: none;">
          <img style="width: 40px;" src="../../static/logo.png">
        </a>
      </div>
      <!-- 微信公众号等图标 -->
      <div style="width: 50px;height: 50px;float: right;margin: 20px 20px 0px 0px;">
        <!-- <a href="javascript:void(0)" @click="WeChartVisible = true"> -->
        <img style="width: 30px;" src="../../static/wechat.png" @mouseenter="mouseEnter" @mouseout="mouseOut">
        <!-- </a> -->
      </div>
      <!-- 导航栏 -->
      <div id="menu">
        <!-- 联系我们 -->
        <div style="float: right;padding: 4px 80px 0px 0px;">
          <a :href="ContactPageUrl" style="text-decoration: none;">
            <font id="menu_font">联系我们</font>
          </a>
        </div>
        <!-- 服务领域 -->
        <div style="float: right;padding: 4px 80px 0px 0px;">
          <a :href="ServicePageUrl" style="text-decoration: none;">
            <font id="menu_font">服务领域</font>
          </a>
        </div>
        <!-- 关于CMAPLE -->
        <div style="float: right;padding: 4px 80px 0px 0px;">
          <a :href="AboutPageUrl" id="menu_font" style="text-decoration: none;">
            <font id="menu_font">关于CMAPLE</font>
          </a>
        </div>
      </div>
      <!-- 约束宽度 -->
      <div style="width: 1024px;margin:0 auto 0;" :style="{height:pageheight - 50 +'px'}">
        <!-- 约束宽度 -->
        <div style="width: 1024px;margin:0 auto 0;" :style="{height:pageheight - 50 +'px'}">
          <!-- 关于标题 -->
          <div style="width: 1024px;position: absolute;top: 38%;">
            <font style="color: #FFFFFF;font-size: 80px;font-weight: 900;letter-spacing: 0.08em;">联系我们</font>
          </div>
          <!-- 关于说明 -->
          <div style="width: 600px;position: absolute;top: 54%;left:50%;margin-left:-300px;">
            <font style="color: #FFFFFF;font-size: 20px;font-weight: 400;">
              加入或者成为CMAPLE.CN的合作贡献者，我们将为你的贡献做出展示并让关注我们的人了解
            </font>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div style="width: 100%;">
      <!-- 限宽 -->
      <div style="width: 1024px;margin: 0 auto 0;padding-top: 40px;padding-bottom: 40px;">
        <!-- 标题 -->
        <div style="text-align: left;">
          <font style="color: #000000;font-weight: 900;font-size: 35px;">联系方式</font>
        </div>
        <!-- Official website custom made -->
        <div style="text-align: left;">
          <font style="color: #C0C4CC;font-weight: 200;font-size: 18px;">Contact Way</font>
        </div>
        <div style="text-align: left;margin-top: 30px;">
          <font style="color: #606266;font-weight: 400;font-size: 18px;">{{ContactInfo.address}}</font>
        </div>
        <div style="text-align: left;margin-top: 20px;">
          <font style="color: #606266;font-weight: 400;font-size: 18px;">{{ContactInfo.postcode}}</font>
        </div>
        <div style="padding: 40px 0px 10px 0;">
          <img style="width: 100%;border-radius:10px;" :src="ContactInfo.img">
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divider div-transparent"></div>
    <!-- 加入我们 -->
    <div style="width: 100%;">
      <!-- 限宽 -->
      <div style="width: 1024px;margin: 0 auto 0;padding-top: 40px;padding-bottom: 40px;">
        <!-- 标题 -->
        <div style="text-align: left;">
          <font style="color: #000000;font-weight: 900;font-size: 35px;">加入我们</font>
        </div>
        <!-- Official website custom made -->
        <div style="text-align: left;">
          <font style="color: #C0C4CC;font-weight: 200;font-size: 18px;">Join Us</font>
        </div>
        <div style="text-align: left;margin-top: 30px;">
          <font style="color: #606266;font-weight: 400;font-size: 18px;">{{ContactInfo.Join[0]}}</font>
        </div>
        <div style="text-align: left;margin-top: 15px;">
          <font style="color: #409EFF;font-weight: 800;font-size: 22px;">{{ContactInfo.Join[1]}}</font>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divider div-transparent"></div>
    <!-- 页脚 - 导航栏 -->
    <div style="">
      <div style="width: 1024px;margin: 0 auto 0;padding: 40px 0 40px 0;">
        <div style="width: 100%;justify-content: flex-start;text-align: left;">
          <!-- 关于 -->
          <div style="width: 16%;display: inline-block;vertical-align: top;">
            <!-- 标题 -->
            <div>
              <span style="color: #000000;font-size: 16px;font-weight: 600;">关于</span>
            </div>
            <!-- 链接 -->
            <ul style="padding:0;margin-bottom: 0px;">
              <!-- 价值观 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="AboutPageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">价值观</font>
                </a>
              </li>
              <!-- 工作室介绍 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="AboutPageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">工作室介绍</font>
                </a>
              </li>
              <!-- 管理团队 -->
              <li style="list-style: none;margin-bottom: 0px;">
                <a :href="AboutPageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">管理团队</font>
                </a>
              </li>
            </ul>
          </div>
          <!-- 服务领域 -->
          <div style="width: 16%;display: inline-block;vertical-align: top;">
            <!-- 标题 -->
            <div>
              <span style="color: #000000;font-size: 16px;font-weight: 600;">服务领域</span>
            </div>
            <!-- 链接 -->
            <ul style="padding:0;margin-bottom: 0px;">
              <!-- 官网定制 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="ServicePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">官网定制</font>
                </a>
              </li>
              <!-- 服务程序开发 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="ServicePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">服务程序开发</font>
                </a>
              </li>
              <!-- CMAPLE.CN论坛 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="ServicePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">CMAPLE.CN论坛</font>
                </a>
              </li>
            </ul>
          </div>
          <!-- 联系我们 -->
          <div style="width: 32%;display: inline-block;vertical-align: top;">
            <!-- 标题 -->
            <div>
              <span style="color: #000000;font-size: 16px;font-weight: 600;">联系我们</span>
            </div>
            <!-- 链接 -->
            <ul style="padding:0;margin-bottom: 0px;">
              <!-- 邮箱&地址 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="ContactPageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">联系方式</font>
                </a>
              </li>
              <!-- 留言 -->
              <li style="list-style: none;margin-bottom: 0px;">
                <a :href="ContactPageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">加入我们</font>
                </a>
              </li>
            </ul>
          </div>
          <!-- 加入我们 -->
          <div style="width: 34%;display: inline-block;vertical-align: top;text-align: right">
            <!-- 链接 -->
            <ul style="padding:0;margin: 0px 0px 0px 0px;">
              <!-- cmaple@aliyun.com -->
              <li style="list-style: none;margin-bottom: 80px;">
                <font style="color: #666;font-size: 18px;text-transform: uppercase;font-weight: 900;">{{this.Domain_Name}}</font>
              </li>
              <!-- 服务时间 -->
              <li style="list-style: none;margin-bottom: 6px;">
                <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">服务时间</font>
              </li>
              <li style="list-style: none;margin-bottom: 0px;">
                <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">周一至周五 08:00 - 18:00</font>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divider div-transparent"></div>
    <!-- 页脚 -->
    <div style="width: 1024px;margin: 0 auto 0;padding: 10px 0 10px 0;">
      <div style="width: 100%;justify-content: flex-start;text-align: top;">
        <!-- 备案号 -->
        <div style="width: 50%;display: inline-block;vertical-align: top;text-align: left">
          <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">{{this.Record_No}} - copyright</font>
        </div>
        <!-- 运营时间及版权 -->
        <div style="width: 49%;display: inline-block;vertical-align: top;text-align: right;">
          <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">{{this.Run_Time_Range}} {{this.Domain_Name}} - all rights reserved</font>
        </div>
      </div>
    </div>
    <!-- 微信弹窗 -->
    <div v-show="isActive" style="position: absolute;top: 70px;right: 70px;">
      <img style="width: 300px;padding-left: 25px;" src="../../static/WechatIMG485.jpeg">
    </div>
  </div>
</template>
<script>
export default {
  //name: 'HelloWorld',
  data() {
    return {
      //msg: 'Welcome to Your Vue.js App'
      isActive: false,
      // 页面高度
      pageheight: '',
      // 备案号
      Record_No: '',
      // 网站运营时间
      Run_Time_Range: '',
      // 网址地址
      Domain_Name: '',
      //github
      GitHubURL: '',
      //主页路由
      HomePageUrl: "",
      //关于页面路由
      AboutPageUrl: '',
      //服务领域页面路由
      ServicePageUrl: '',
      //联系我们页面路由
      ContactPageUrl: '',
      //主页图片
      ContactImgUrl: '../../static/contact_background.jpg',
      //联系方式
      ContactInfo: {
        //地址
        address: '地址：中国浙江省杭州市滨江区江汉路1515号 - (测试地址)',
        //邮编
        postcode: '邮编：310051',
        //图片
        img: '../../static/adress.jpg',
        //加入我们
        Join: ['请关注微信公众号并在公众号中提交自己的简历，我们将尽快给您进行回复！', '微信公众号：cmaplesystem'],
      }
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    mouseEnter() { this.isActive = true },
    mouseOut() { this.isActive = false },

  },
  created() {
    //初始化静态参数
    this.Record_No = this.$Config.Record_No;
    this.Run_Time_Range = this.$Config.Run_Time_Range;
    this.Domain_Name = this.$Config.Domain_Name;
    this.GitHubURL = this.$Config.GitHubURL;
    this.HomePageUrl = this.$Config.HomePageUrl;
    this.AboutPageUrl = this.$Config.AboutPageUrl;
    this.ServicePageUrl = this.$Config.ServicePageUrl;
    this.ContactPageUrl = this.$Config.ContactPageUrl;
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
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 官网页头展示 */
#homepage_font {
  width: 100%;
  background-size: cover;
  background-color: #FFF;
}

#menu {
  width: 610px;
  height: 30px;
  margin: 0 auto 0;
  padding-top: 25px;
}

/* 导航栏字体 */
#menu_font {
  color: #FFFFFF;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 900;
}

/* 导航栏字体 鼠标悬浮之后 */
#menu_font:hover {
  color: #FFFFFF;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 900;
}

/* 主页展示内容链接 */
#main_font_a {
  color: #409EFF;
  font-size: 20px;
  letter-spacing: 0.2em;
  padding-bottom: 2px;
  font-weight: 900;
  text-decoration: none;
}

/* 主页展示内容链接 鼠标悬浮之后 */
#main_font_a:hover {
  color: #409EFF;
  font-size: 20px;
  letter-spacing: 0.2em;
  font-weight: 900;
  border-bottom: 2px solid #409EFF;
}

/*  */
#about_font_a {
  color: #409EFF;
  font-size: 16px;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  font-weight: 900;
  text-decoration: none;
}

/*  */
#about_font_a:hover {
  color: #409EFF;
  font-size: 16px;
  letter-spacing: 0.1em;
  font-weight: 900;
  border-bottom: 2px solid #409EFF;
}

/* 分割线 */
.divider {
  position: relative;
  margin-top: 0px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  width: 80%;
  height: 1px;
  background-image: linear-gradient(to right, transparent, darkgrey, transparent);
}

/* 关于工作室描述文字 */
#about_font {
  font-size: 16px;
  font-weight: 300;
}

/* 团队管理展示标签 */
#case_menu {
  border-radius: 10px;
  display: inline-block;
  vertical-align: top;
  width: 332px;
  height: 400px;
  box-shadow: 2px 2px 10px #DCDFE6;
  margin: 30px 9px 0 0;
  /* background-color: #F2F6FC; */
}

/* 服务程序展示标签 */
#program_menu {
  width: 100%;
  height: 60px;
  margin-top: 5px;
}

/*  */
.a_hover {
  color: #000;
  font-size: 18px;
  font-weight: 800;
}

.a_hover:hover {
  color: #C0C4CC;
  font-size: 18px;
  font-weight: 800;
}

/* 背景图放大 */
/* 无法选中属性 */
.select {
  -webkit-user-select: none;
  /*WebKit内核私有属性*/
  -moz-user-select: none;
  /*Firefox私有属性*/
  -ms-user-select: none;
  /*IE私有属性(IE10及以后)*/
  -khtml-user-select: none;
  /*KHTML内核私有属性*/
  -o-user-select: none;
  /*Opera私有属性*/
  user-select: none;
  /*CSS3属性*/
}

</style>
