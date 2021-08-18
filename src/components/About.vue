<!-- 关于页面 -->
<template>
  <div class="hello">
    <!-- 官网首页展示头 - 覆盖整个打开的浏览器页面 -->
    <div id="homepage_font" v-bind:style="{height:this.pageheight+'px',backgroundImage:'url('+this.aboutPageImgUrl+')'}">
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
        <!-- 关于标题 -->
        <div style="width: 1024px;position: absolute;top: 38%;">
          <font style="color: #FFF;font-size: 80px;font-weight: 900;letter-spacing: 0.08em;">关于CMAPLE.CN</font>
        </div>
        <!-- 关于说明 -->
        <div style="width: 600px;position: absolute;top: 54%;left:50%;margin-left:-300px;">
          <font style="color: #FFF;font-size: 20px;font-weight: 400;">
            CMAPLE.CN-是CMAPLE及其小伙伴一起创建的网络工作室，提供个人网站、公司官网、第三方服务定制等。
          </font>
        </div>
      </div>
    </div>
    <!-- 说明 - 描述网站和工作室的内容 -->
    <div style="width: 100%;">
      <!-- 价值观 -->
      <div style="width: 1024px;height: 300px;margin: 0 auto 0;justify-content: flex-start;text-align: top;padding: 30px 0 30px 0;">
        <!-- 文字 -->
        <div style="width: 60%;float: left;margin-top: 60px;">
          <div style="width: 100%;height: auto;margin-bottom: 10px;text-align: left;">
            <font style="color: #303133;font-size: 30px;font-weight: 700;">价值观</font>
          </div>
          <div style="width: 100%;height: auto;text-align: left;">
            <font style="color: #303133;font-size: 16px;font-weight: 400;">
              CMAPLE.CN的使命是帮助个人或组织开发网站或者第三方服务，并保障人们的隐私不受任何组织或者个人侵犯。我们希望能完善目前网站与服务的相关安全完全性，并且所涉及的开发是符合大部分人的共同利益，而且我们也愿意帮助其他研究机构或组织或个人共同完成相关网站和服务的开发。
            </font>
          </div>
        </div>
        <!-- 图片 -->
        <div class="select" style="width: 19%;float: right;text-align: right;margin-top: 130px;">
          <font style="color: #000000;font-size: 30px;font-weight: 900;">CMAPLE.CN</font>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divider div-transparent"></div>
    <!-- 工作室介绍 -->
    <div style="width: 100%;">
      <!-- 限宽 -->
      <div style="width: 1024px;margin: 0 auto 0;">
        <!-- 标题 -->
        <div style="text-align: left;padding: 60px 0 20px 0;">
          <font style="color: #000000;font-weight: 900;font-size: 35px;">关于CMAPLE.CN工作室</font>
        </div>
        <!-- 内容 -->
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们承诺在网站或服务开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把服务或者网站技术置于损害人类或过度集中权力的事业中。
          </font>
        </div>
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少雇员和利益相关者间的利益冲突，确保大多数人可以受益。
          </font>
        </div>
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们担心服务开发咋发展后期会演变成为一场激烈的竞赛，导致缺乏充足的时间进行安全防范。因此，如果有个人或组织所开发的相同的服务与人类价值观相符、注重安全的项目领先于我们，我们将承诺停止竞赛，并转而协助这个项目。我们会针对个别情况设计具体的合作方案。
          </font>
        </div>
        <div style="text-align: left;padding: 0px 0px 40px 0;">
          <a :href="ServicePageUrl" id="about_font_a">
            <font>了解更多详细信息</font>
          </a>
        </div>
        <!-- 图片 -->
        <div style="padding: 10px 0 20px 0;margin-bottom: 50px;">
          <img style="width: 100%;border-radius:20px;" src="../../static/abuutpage_auout.jpg">
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divider div-transparent"></div>
    <!-- 管理团队 -->
    <div style="width: 100%;">
      <!-- 限宽 -->
      <div style="width: 1024px;margin: 0 auto 0;padding: 50px 0 50px 0;text-align: left;">
        <!-- 标题 -->
        <div>
          <font style="color: #000000;font-weight: 900;font-size: 35px;">管理团队</font>
        </div>
        <!-- 内容 -->
        <div v-if="this.teams && this.teams.length > 0">
          <div id="team_menu" v-for="item in teams" :key="item.id">
            <div style="padding: 12px 0 0 20px;">
              <!-- 名字 -->
              <div style="">
                <font style="font-size: 16px;color: #000000;font-weight: 900;">{{item.name}}</font>
              </div>
              <!-- 职位 -->
              <div style="">
                <font style="font-size: 12px;color: #000000;font-weight: 400;">{{item.position}}</font>
              </div>
              <!-- 贡献度 -->
              <div style="">
                <font style="font-size: 10px;color: #000000;font-weight: 600;">{{item.introduce}}</font>
              </div>
            </div>
          </div>
        </div>
        <div id="team_menu" v-else>
          <div style="padding: 34px 0 0 100px;">
            <!-- 名字 -->
            <div style="">
              <font style="font-size: 16px;color: #DCDFE6;font-weight: 900;">目前暂无管理团队</font>
            </div>
          </div>
        </div>
        <!-- 合作贡献 -->
        <div style="margin-top: 40px;">
          <font style="color: #000000;font-weight: 700;font-size: 25px;">合作贡献</font>
        </div>
        <!-- 内容 -->
        <div v-if="this.contributions && this.contributions.length > 0">
          <div id="team_menu" v-for="contribution in contributions" :key="contribution.id">
            <div style="padding: 12px 0 0 20px;">
              <!-- 名字 -->
              <div style="">
                <font style="font-size: 16px;color: #000000;font-weight: 900;">{{contribution.name}}</font>
              </div>
              <!-- 职位 -->
              <div style="">
                <font style="font-size: 12px;color: #000000;font-weight: 400;">{{contribution.position}}</font>
              </div>
              <!-- 贡献度 -->
              <div style="">
                <font style="font-size: 10px;color: #000000;font-weight: 600;">{{contribution.introduce}}</font>
              </div>
            </div>
          </div>
        </div>
        <div id="team_menu" v-else>
          <div style="padding: 34px 0 0 90px;">
            <!-- 名字 -->
            <div style="">
              <font style="font-size: 16px;color: #DCDFE6;font-weight: 900;">目前暂无合作贡献者</font>
            </div>
          </div>
        </div>
        <!-- 投资者 -->
        <div style="margin-top: 40px;">
          <font style="color: #000000;font-weight: 700;font-size: 25px;">投资者</font>
        </div>
        <!-- 内容 -->
        <div v-if="this.investments && this.investments.length > 0">
          <div id="team_menu" v-for="investment in investments" :key="investment.id">
            <div style="padding: 20px 0 0 20px;">
              <!-- 名字 -->
              <div style="">
                <font style="font-size: 16px;color: #000000;font-weight: 600;">{{investment.name}}</font>
              </div>
              <!-- 贡献度 -->
              <div style="margin-top: 5px;">
                <font style="font-size: 10px;color: #000000;font-weight: 600;">{{investment.introduce}}</font>
              </div>
            </div>
          </div>
        </div>
        <div id="team_menu" v-else>
          <div style="padding: 34px 0 0 100px;">
            <!-- 名字 -->
            <div style="">
              <font style="font-size: 16px;color: #DCDFE6;font-weight: 900;">目前暂无投资者</font>
            </div>
          </div>
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
          <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" id="recordno">
              {{this.Record_No}} 
            </a>
            - copyright
          </font>
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
      //主页路由
      HomePageUrl: "",
      //关于页面路由
      AboutPageUrl: '',
      //服务领域页面路由
      ServicePageUrl: '',
      //联系我们页面路由
      ContactPageUrl: '',
      //主页图片
      aboutPageImgUrl: '../../static/about_background.jpg',
      // 管理团队
      teams: [],
      // 贡献
      contributions: [],
      // 赞助
      investments: [],
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    mouseEnter() { this.isActive = true },
    mouseOut() { this.isActive = false },
    //获取团队管理信息
    contributionInfo(){
      //设置必要参数
      var that = this;
      //获取团队管理信息
        this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getContributionInfo,
        this.$qs.stringify({
          uip: localStorage.getItem("cip"),
          lastplace: localStorage.getItem("cname")
        }))
      .then(function(res){
        if (res.data.RTCODE == 'success') {
          //管理团队
          for (var i = 0; i < res.data.RTDATA.teams.length; ++i) {
            var c_teams = new Object();
            c_teams.id = res.data.RTDATA.teams[i].id;
            c_teams.type = res.data.RTDATA.teams[i].type;
            c_teams.name = res.data.RTDATA.teams[i].name;
            c_teams.position = res.data.RTDATA.teams[i].position;
            c_teams.introduce = res.data.RTDATA.teams[i].introduce;
            that.teams.push(c_teams);
          }
          //贡献
          for (var i = 0; i < res.data.RTDATA.contributions.length; ++i) {
            var c_contributions = new Object();
            c_contributions.id = res.data.RTDATA.contributions[i].id;
            c_contributions.type = res.data.RTDATA.contributions[i].type;
            c_contributions.name = res.data.RTDATA.contributions[i].name;
            c_contributions.position = res.data.RTDATA.contributions[i].position;
            c_contributions.introduce = res.data.RTDATA.contributions[i].introduce;
            that.contributions.push(c_contributions);
          }
          //赞助
          for (var i = 0; i < res.data.RTDATA.investments.length; ++i) {
            var c_investments = new Object();
            c_investments.id = res.data.RTDATA.investments[i].id;
            c_investments.type = res.data.RTDATA.investments[i].type;
            c_investments.name = res.data.RTDATA.investments[i].name;
            c_investments.position = res.data.RTDATA.investments[i].position;
            c_investments.introduce = res.data.RTDATA.investments[i].introduce;
            that.investments.push(c_investments);
          }
        }else{
          //异常结果显示
          that.$Global.alertMessage(that, "获取团队管理信息异常！", res.data.RTMSG, "error");
        }
      })
      .catch(function(err){
        that.$Global.alertMessage(that, "获取团队管理信息函数异常！", err+'', "error");
      });
    },
  },
  created() {
    //初始化静态参数
    this.Record_No = this.$Config.Record_No;
    this.Run_Time_Range = this.$Config.Run_Time_Range;
    this.Domain_Name = this.$Config.Domain_Name;
    this.HomePageUrl = this.$Config.HomePageUrl;
    this.AboutPageUrl = this.$Config.AboutPageUrl;
    this.ServicePageUrl = this.$Config.ServicePageUrl;
    this.ContactPageUrl = this.$Config.ContactPageUrl;
    //请求首页展示图片及内容路由
    //console.log(localStorage.getItem("cip")+'/'+localStorage.getItem("cname"));
    this.contributionInfo();
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 官网页头展示 */
#homepage_font {
  width: 100%;
  background-size: cover;
  background-color: #000000;
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

/* 主页展示内容向下标记图标 */
#bottom_img {
  position: absolute;
  margin: 0 auto;
  left: 50px;
  right: 50px;
  top: 5px;
  width: 30px;
}

/* 主页展示内容向下标记图标 鼠标悬浮之后 */
#bottom_img:hover {
  position: absolute;
  margin: 0 auto;
  left: 50px;
  right: 50px;
  top: 8px;
  width: 30px;
}

/* 备案信息提跳转 */
#recordno{
  color: #C0C4CC;
  text-decoration:none;
}
#recordno:hover{
  color: red;
  text-decoration:none;
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
#team_menu {
  border-radius: 10px;
  display: inline-block;
  vertical-align: top;
  width: 332px;
  height: 90px;
  box-shadow: 2px 2px 10px #DCDFE6;
  margin: 30px 9px 0 0;
  /* background-color: #F2F6FC; */
}

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
