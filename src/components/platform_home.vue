<!-- 论坛首页 -->
<template>
  <div style="width: 100%;height: 100%;">
      <div style="width: 100%;background-color: #E4E7ED;" :style="{height:pageheight+'px'}">
        <!-- 页头 -->
        <div style="background-color: #303133;width: 100%;height: 60px;">
          <!-- 用户中心 -->
           <div style="float: left;padding: 18px 0px 0px 40px;">
            <font class="noselect" style="color: #FFFFFF;font-size: 16px;text-transform: uppercase;letter-spacing: 0.2em;font-weight: 900;">CMAPLE.CN 论坛</font>
          </div>
          <!-- 用户中心 -->
           <div style="float: right;padding: 18px 45px 0px 0px;">
            <a href="/" style="text-decoration: none;">
              <font id="menu_font">用户中心</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 18px 45px 0px 0px;">
            <a href="/ServicePageUrl" style="text-decoration: none;">
              <font id="menu_font">关于</font>
            </a>
          </div>
          <!-- 首页 -->
          <div style="float: right;padding: 18px 45px 0px 0px;">
            <a href="/ServicePageUrl" style="text-decoration: none;">
              <font id="menu_font">首页</font>
            </a>
          </div>
        </div>
        <!-- 功能栏 -->
        <div style="height: 40px;margin: 20px 0px 0px 40px;">
           <div class="team_menu" style="width:97.5%!important;">
            功能栏
             <!-- 搜索框 -->
             <!-- 按钮 -->
           </div>
        </div>
        <!-- 页面内容 -->
        <div style="margin: 0px 0px 0px 40px;">
          <!-- 列表 -->
          <div class="team_menu" v-for="contribution in contributions" :key="contribution.id">
            <div style="padding: 5px;height: 30px;position: relative;">
              <!-- 用户头像 -->
              <div style="width:40px;height:40px;position: absolute;top: 0px;">
                <img :src="contribution.img" style="width:30px;height:30px;padding:5px;">
              </div>
              <!-- 用户名称 -->
              <div class="noselect"  style=" width:160px;height:30px;padding: 0px;line-height: 30px!important;text-align: center;position: absolute;left:60px;font-weight:600;color: #606266;">
                {{contribution.name}}
              </div>
              <!-- 标签 -->
              <div class="noselect" style="width:50px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;position: absolute;left:240px;">
                <!-- 置顶 -->
                <div v-if="contribution.types == 1" style="background-color: #67C23A;width: 50px;height: 30px;border-radius:5px;color: #FFFFFF;text-align: center;font-weight: 900;">
                  置顶
                </div>
                <!-- 热点 -->
                <div v-else-if="contribution.types == 2" style="background-color: #F56C6C;width: 50px;height: 30px;border-radius:5px;color: #FFFFFF;text-align: center;font-weight: 900;">
                  热点
                </div>
                <!-- 广告 -->
                <div v-else-if="contribution.types == 3" style="background-color: #909399;width: 50px;height: 30px;border-radius:5px;color: #FFFFFF;text-align: center;font-weight: 900;">
                  广告
                </div>
                <!-- 交流 -->
                <div v-else-if="contribution.types == 4" style="background-color: #409EFF;width: 50px;height: 30px;border-radius:5px;color: #FFFFFF;text-align: center;font-weight: 900;">
                  交流
                </div>
                <!-- 错误 -->
                <div v-else style="background-color: #E6A23C;width: 50px;height: 30px;border-radius:5px;color: #FFFFFF;text-align: center;font-weight: 900;">
                  未知
                </div>
              </div>
              <!-- 帖子标题 -->
              <div style="width:450px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;position: absolute;left:320px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                <a class="pl_a" href="/1111">{{contribution.title}}</a>
              </div>
              <!-- 日期/发布提前时间 -->
               <div class="noselect" style="width:100px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:160px;font-weight:600;color: #C0C4CC;">
                {{contribution.time}}
              </div>
              <!-- 评论数量/查看次数 -->
              <div class="noselect" style="width:120px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:20px;font-weight:600;color: #C0C4CC;">
                {{contribution.comments}}
              </div>
            </div>
          </div>
          <!-- 分页按钮 -->
           <div class="team_menu"></div>
        </div>
        <!-- 侧面个人信息 -->
        <div style="width: 21.5%;height: 200px;border-radius: 6px;box-shadow: 2px 2px 10px #DCDFE6;background-color: #F2F6FC;position:fixed;right:2.5%;top:125px;">
          侧面个人信息
        </div>
        <!-- 侧面广告信息 -->
        <div style="width: 21.5%;height: 200px;border-radius: 6px;box-shadow: 2px 2px 10px #DCDFE6;background-color: #F2F6FC;position:fixed;right:2.5%;top:330px;">
          侧面广告信息
        </div>
        <!-- 积分排行 -->
        <div style="width: 21.5%;height: 260px;border-radius: 6px;box-shadow: 2px 2px 10px #DCDFE6;background-color: #F2F6FC;position:fixed;right:2.5%;top:535px;">
          积分排行
        </div>
        <!-- 页脚 -->
       <!--  <div style=";width: 100%;height: 40px;margin-top:20px;background-color: #303133;position: fixed;bottom: 0px;" >
          
        </div> -->
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 页面高度
      pageheight: '',
      // 论坛目录
      contributions: [
        {
          id:1,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:1,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转1111111姐姐互粉互粉很看好法喜111111',
          time:'2021-01-21'
        },
        {
          id:2,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:1,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:3,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:2,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:4,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:3,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:5,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:6,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:7,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:8,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:9,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:10,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:11,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:12,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:13,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
        {
          id:14,
          img:'../../static/athlete.png',
          name:'黑山老幺的好的哈',
          types:4,
          comments:'200/45800006',
          title:'这个是测试标题，点击直接跳转',
          time:'2021-01-21'
        },
      ],
    }
  },
  methods: {
   getPageHeight() {
      this.pageheight = window.innerHeight;
    },
  },
  created() {
    
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
  /* 团队管理展示标签 */
  .team_menu {
    border-radius: 6px;
    width: 75%;
    height: 40px;
    box-shadow: 2px 2px 10px #DCDFE6;
    margin: 5px 0px 0px 0px;
    background-color: #F2F6FC;
  }
  /* 无法选中属性 */
  .noselect {
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
  /* 导航栏字体 */
  #menu_font {
    color: #FFFFFF;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 900;
    text-decoration: none;
  }

  /* 导航栏字体 鼠标悬浮之后 */
  #menu_font:hover {
    color: #FFFFFF;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 900;
    border-bottom: 1.5px solid #FFFFFF;
  }

  .pl_a{
    text-decoration: none;
    color: #000000!important;
    font-weight:900;
    width: auto;
    height: auto;
  }
  .pl_a:hover{
    text-decoration: underline;
    color: #409EFF!important;
    font-weight:900;
    width: auto;
    height: auto;
  }
</style>
