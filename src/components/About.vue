<template>
  <div class="hello">
    <!-- 官网首页展示头 - 覆盖整个打开的浏览器页面 -->
    <div id="homepage_font" :style="{height:pageheight+'px'},{backgroundImage:'url('+aboutPageImgUrl+')'}">
      <!-- 官网LOGO -->
      <div style="width: 50px;height: 50px;float: left;margin: 10px 0px 0px 20px;">
        <a :href="HomePageUrl" style="text-decoration: none;">
           <img style="width: 40px;" src="../../static/logo.png">
         </a>
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
              <a :href="AboutPageUrl"  id = "menu_font" style="text-decoration: none;">
                <font id = "menu_font">关于CMAPLE</font>
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
              Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开发的便捷工具
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
              OpenAI的使命是确保通用人工智能 (Artificial General Intelligence, AGI)，即一种高度自主且在大多数具有经济价值的工作上超越人类的系统，将为全人类带来福祉。我们不仅希望直接建造出安全的、符合共同利益的通用人工智能，而且愿意帮助其它研究机构共同建造出这样的通用人工智能以达成我们的使命。为了达到这个目标，我们制订了如下原则：
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
          <font style="color: #000000;font-weight: 900;font-size: 40px;">关于CMAPLE.CN工作室</font>
        </div>
        <!-- 内容 -->
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。
          </font>
        </div>
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少雇员和利益相关者间的利益冲突，确保大多数人可以受益。
          </font>
        </div>
        <div style="width: 70%;text-align: left;padding: 0px 0 40px 0;">
          <font id="about_font">
            我们担心通用人工智能在发展后期将演变成一场激烈的竞赛，导致缺乏充足的时间进行安全防范。因此，如果一个与人类价值观相符、注重安全的项目领先于我们将近达成通用人工智能，我们承诺将停止竞赛，幷转而协助这个项目。我们会针对个别情况设计具体的合作方案。不过，一个典型的触发条件可能会是「这个项目在未来两年内能够成功研发通用人工智能的概率超过一半」。
          </font>
        </div>
        <div style="text-align: left;padding: 0px 0px 40px 0;">
          <a :href="AboutPageUrl" id = "about_font_a">
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
          <font style="color: #000000;font-weight: 900;font-size: 40px;">管理团队</font>
        </div>
        <!-- 内容 -->
        <div id="team_menu" v-for="item in teams">
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
        <!-- 合作贡献 -->
        <div style="margin-top: 40px;">
          <font style="color: #000000;font-weight: 700;font-size: 25px;">合作贡献</font>
        </div>
        <!-- 内容 -->
         <div id="team_menu" v-for="contribution in contributions">
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
          <!-- 投资者 -->
          <div style="margin-top: 40px;">
            <font style="color: #000000;font-weight: 700;font-size: 25px;">投资者</font>
          </div>
          <!-- 内容 -->
          <div  v-if="this.investments && this.investments.length > 0">
             <div id="team_menu" v-for="investment in investments">
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
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">官网定制</font>
                </a>
              </li>
              <!-- 服务程序开发 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">服务程序开发</font>
                </a>
              </li>
              <!-- CMAPLE.CN论坛 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">CMAPLE.CN论坛</font>
                </a>
              </li>
              <!-- 区块链 -->
              <li style="list-style: none;margin-bottom: 0px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">区块链</font>
                </a>
              </li>
            </ul>
          </div>
          <!-- 联系我们 -->
          <div style="width: 16%;display: inline-block;vertical-align: top;">
            <!-- 标题 -->
            <div>
              <span style="color: #000000;font-size: 16px;font-weight: 600;">联系我们</span>
            </div>
            <!-- 链接 -->
            <ul style="padding:0;margin-bottom: 0px;">
              <!-- 邮箱&地址 -->
              <li style="list-style: none;margin-bottom: 16px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">邮箱&地址</font>
                </a>
              </li>
              <!-- 留言 -->
              <li style="list-style: none;margin-bottom: 0px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">留言</font>
                </a>
              </li>
            </ul>
          </div>
          <!-- 加入我们 -->
          <div style="width: 16%;display: inline-block;vertical-align: top;">
            <!-- 标题 -->
            <div>
              <span style="color: #000000;font-size: 16px;font-weight: 600;">加入我们</span>
            </div>
            <!-- 链接 -->
            <ul style="padding:0;margin-bottom: 0px;">
              <!-- 加入CMAPLE.CN -->
              <li style="list-style: none;margin-bottom: 0px;">
                <a :href="HomePageUrl" style="text-decoration: none;">
                  <font style="color: #666;font-size: 12px;text-transform: uppercase;font-weight: 300;">加入CMAPLE.CN</font>
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
                <font style="color: #C0C4CC;font-size: 12px;text-transform: uppercase;font-weight: 600;">周一至周日 08:00 - 18:00</font>
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
  </div>
</template>

<script>
export default {
  //name: 'HelloWorld',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
      // 页面高度
      pageheight:'',
       // 备案号
      Record_No:'',
      // 网站运营时间
      Run_Time_Range:'',
      // 网址地址
      Domain_Name:'',
      //主页路由
      HomePageUrl:"",
      //关于页面路由
      AboutPageUrl:'',
      //主页图片
      aboutPageImgUrl:'../../static/about_background.jpg',
      
      // 管理团队
      teams:[
        { 
          //编号
          id:1, 
          //名称
          name:'C-MAPLE',
          //职位
          position:'创始人',
          //个人介绍
          introduce:'CMAPLE.CN网站的创始人。',
        },
        { 
          //编号
          id:2, 
          //名称
          name:'EMMA',
          //职位
          position:'创始人',
          //个人介绍
          introduce:'CMAPLE.CN网站的创始人。',
        },
      ],
      // 贡献
      contributions:[
        { 
          //编号
          id:1, 
          //名称
          name:'吴KangLi',
          //职位
          position:'前端工程师',
          //个人介绍
          introduce:'为网站提供了前端技术支持。',
        },
        { 
          //编号
          id:2, 
          //名称
          name:'颜ChengJie',
          //职位
          position:'前端工程师',
          //个人介绍
          introduce:'为网站提供了前端技术支持。',
        },
      ],
      // 赞助
      investments:[
        // { 
        //   //编号
        //   id:1, 
        //   //名称
        //   name:'Microsoft，Reid Hoffman的慈善基金会',
        //   //个人介绍
        //   introduce:'为工作室提供赞助支持。',
        // },
      ],
    }
  },
   methods:{
    // 获取当前浏览器页面高度
    getPageHeight(){
      this.pageheight = window.innerHeight;
    }
  },
  created(){
    //初始化静态参数
    this.Record_No=this.$Config.Record_No;
    this.Run_Time_Range=this.$Config.Run_Time_Range;
    this.Domain_Name=this.$Config.Domain_Name;
    this.HomePageUrl=this.$Config.HomePageUrl;
    this.AboutPageUrl=this.$Config.AboutPageUrl;
    //请求首页展示图片及内容路由
    //console.log(localStorage.getItem("cip")+'/'+localStorage.getItem("cname"));
  },
  destroyed(){
  },
  mounted(){
    //页面高度赋值
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
#about_font{
  font-size: 16px;
  font-weight: 300;
}
/* 团队管理展示标签 */
#team_menu{
  border-radius:10px;
  display: inline-block;
  vertical-align: top;
  width: 332px;
  height: 90px;
  box-shadow: 2px 2px 10px #DCDFE6;
  margin:30px 9px 0 0;
  /* background-color: #F2F6FC; */
}
/* 无法选中属性 */
.select{  
    -webkit-user-select:none;  /*WebKit内核私有属性*/
     -moz-user-select:none;    /*Firefox私有属性*/
     -ms-user-select:none;     /*IE私有属性(IE10及以后)*/
     -khtml-user-select:none;  /*KHTML内核私有属性*/
     -o-user-select:none;      /*Opera私有属性*/
     user-select:none;         /*CSS3属性*/
}

</style>
