<!-- 论坛首页 -->
<template>
  <div style="width: 100%;height: auto;background-color: #F0F0F0;">
      <div style="width: 100%;">
        <!-- 页头 -->
        <div style="background-color: #303133;width: 100%;height: 60px;">
          <!-- 用户中心 -->
           <div style="float: left;padding: 0px 0px 0px 42px;">
            <font class="noselect" style="line-height: 60px;color: #FFFFFF;font-size: 23px;text-transform: uppercase;letter-spacing: 0.2em;font-weight: 900;">CMAPLE.CN 论坛</font>
          </div>
          <div style="float: left;width:550px;padding: 5px 0px 0px 50px;">
             <!-- 搜索框 -->
             <input id="search" style="width:70%;height:30px;border-radius:5px 0px 0px 5px;padding:2px 10px 0px 10px;margin: 8px 0px 0px 20px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .05em!important;float:left;" type="text" name="search" placeholder="请输入 标题/内容 的关键字">
             <!-- 按钮 -->
             <button id="search_button" type="submit" class="search_button" @click="search()">搜&nbsp&nbsp索</button>
          </div>
          <!-- 用户中心 -->
           <div style="float: right;padding: 18px 45px 0px 0px;">
            <a href="/" style="text-decoration: none;">
              <font id="menu_font">用户中心</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 18px 80px 0px 0px;">
            <a href="/ServicePageUrl" style="text-decoration: none;">
              <font id="menu_font">关于</font>
            </a>
          </div>
          <!-- 首页 -->
          <div style="float: right;padding: 18px 80px 0px 0px;">
            <a href="/platform_home/" style="text-decoration: none;">
              <font id="menu_font">首页</font>
            </a>
          </div>
        </div>
        <!-- 页面内容 -->
        <div style="margin: 0 auto 0;margin-top: 20px;width: 1024px;overflow: hidden;">
          <div style="width:750px;height: auto;margin:0px;float:left;">
            <!-- 列表 -->
            <div class="pl_hone_menu" v-for="contribution in contributions.date" :key="contribution.id">
              <div style="padding: 5px;height: 130px;position: relative;">
               <!-- 标签 -->
                <div class="noselect" style="width:50px;height:30px;padding: 0px;line-height: 25px!important;text-align: left;position: absolute;left:10px;top: 11px;font-weight: 900;font-size: 13.5px;">
                  <!-- 置顶 -->
                  <div v-if="contribution.types == 1" class="label" style="background-color: #67C23A;">
                    置顶
                  </div>
                  <!-- 热点 -->
                  <div v-else-if="contribution.types == 2" class="label" style="background-color: #A16DAF;">
                    公告
                  </div>
                  <!-- 精华 -->
                  <div v-else-if="contribution.types == 3" class="label" style="background-color: #FFAB00;">
                    精华
                  </div>
                  <!-- 公告 -->
                  <div v-else-if="contribution.types == 4" class="label" style="background-color: #EA2D16;">
                    热点
                  </div>
                  <!-- 广告 -->
                  <div v-else-if="contribution.types == 5" class="label" style="background-color: #909399;">
                    广告
                  </div>
                  <!-- 交流 -->
                  <div v-else-if="contribution.types == 6" class="label" style="background-color: #409EFF;">
                    交流
                  </div>
                  <!-- 错误 -->
                  <div v-else class="label" style="background-color: #E6A23C;">
                    未知
                  </div>
                </div>
                <!-- 帖子标题 -->
                <div style="width:500px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;position: absolute;left:70px;top: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                  <a class="pl_a" :href="contribution.url" target="_blank">{{contribution.title}}</a>
                </div>
                <!-- 文章简介 -->
                <div style="width:600px;height:30px;padding: 0px;text-align: left;position: absolute;left:70px;top: 45px;font-size:14px;color: #999;font-weight:600;">
                  生产流程复杂，产能调整反应慢：钢铁产品生产包含炼铁、炼钢与轧钢三个环节，其中各环节涉及多个生产系统、工业控制系统与供应链层级，具备流程复杂杂...
                </div>
                <!-- 用户头像 -->
                <div style="width:30px;height:30px;position: absolute;top: 100px;">
                  <img :src="contribution.img" style="width:25px;height:25px;padding:5px;border-radius: 100px;">
                </div>
                <!-- 用户名称 -->
                <div class="noselect"  style=" width:160px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;position: absolute;left:50px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  {{contribution.name}}
                </div>
                <!-- 文章标签 -->
                <!-- 收藏 -->
                <!-- 收藏数量 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:360px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  收藏：{{contribution.collect}}
                </div>
                 <!-- 评论数量 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:270px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  评论：{{contribution.comments}}
                </div>
                <!-- 浏览次数 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:170px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  浏览：{{contribution.browse}}
                </div>
                <!-- 日期/发布提前时间 -->
                <div class="noselect" style="width:210px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:20px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  发布于：{{contribution.time}}
                </div>
              </div>
              <!-- 分割线 -->
              <hr color= #DCDFE6 size="1" style="margin: 0px;">
            </div>
            <!-- 加载更多 -->
            <div class="pl_hone_menu" style="margin: 1px 0px 40px 0px;height:70px;">
              <a href="" style="height:70px;line-height:70px;font-size:16px;text-decoration:none;color: #00c3ff;font-weight:600;">点击加载更多</a>
            </div>
          </div>
          <!-- 侧面功能按钮 -->
          <div style="width: 260px;height: 730px;float:right;">
             <div style="width: 260px;height:auto;">
              <div style="width: 260px;height: 60px;border-radius: 6px;background-color: #FFFFFF;">
                <!-- 发布话题 -->
                <button id="add_button" type="submit" class="add_button" style="float: left;width: 115px;height:40px;" @click="add()">发布话题</button>
                <!-- 管理中心 （只有创始人&管理员级别才能查看）-->
                <button id="useradmin_button" type="submit" class="useradmin_button" style="float: left;width:115px;height:40px;" @click="add()">管理中心</button>
              </div>
              <!-- 侧面个人信息 -->
              <div style="width: 260px;height: 150px;border-radius: 6px;background-color: #FFFFFF;margin-top:10px;">
                <!-- 标题栏 -->
                <div style="width: 100%;height: 25px;background-color: #303133;border-radius:5px 5px 0px 0px;text-align: left;">
                  <font style="padding: 0px 0px 0px 10px;line-height:25px;font-size:13px;font-weight:900;color: #FFFFFF;">个人信息</font>
                </div>
                <!-- 头像 -->
                <div style="width:40px;height:40px;float: left;margin: 10px 0px 0px 10px;">
                  <img :src="perInfo.img" style="width: 40px;height: 40px;border-radius: 100px;">
                </div>
                <div style="width:76%;height:125px;float: right;text-align:left;padding-left: 0px;border-radius:0px 0px 5px 0px;">
                  <!-- 用户名 -->
                  <h1 style="font-size:15px;letter-spacing: .01em;margin: 7px 0px 10px 0px;">{{perInfo.name}}</h1>
                  <!-- 用户级别 -->
                    <!-- 创始人 -->
                    <div v-if="perInfo.type == 0" style="font-weight: 900;font-size: 13px;background-color: #303133;width: 70px;height: 18px;border-radius:5px;color: #FBD51F;text-align: center;line-height:18px;border: 2px solid #FBD51F;">
                      创&nbsp始&nbsp人
                    </div>
                    <!-- 管理员 -->
                    <div v-else-if="perInfo.type == 1" style="font-weight: 900;font-size: 13px;background-color: #1A4C7B;width: 70px;height: 18px;border-radius:5px;color: #DEE0EC;text-align: center;line-height:18px;border: 2px solid #DEE0EC;">
                      管&nbsp理&nbsp员
                    </div>
                    <!-- 贡献者 -->
                    <div v-else-if="perInfo.type == 2" style="font-weight: 900;font-size: 13px;background-color: #162E55;width: 70px;height: 18px;border-radius:5px;color: #E6BE90;text-align: center;line-height:18px;border: 2px solid #E6BE90;">
                      贡&nbsp献&nbsp者
                    </div>
                    <!-- 投资人 -->
                    <div v-else-if="perInfo.type == 3" style="font-weight: 900;font-size: 13px;background-color: #9F383A;width: 70px;height: 18px;border-radius:5px;color: #F4DBB2;text-align: center;line-height:18px;border: 2px solid #F4DBB2;">
                      投&nbsp资&nbsp人
                    </div>
                    <!-- 会员 -->
                    <div v-else-if="perInfo.type == 4" style="font-weight: 900;font-size: 13px;background-color: #007762;width: 70px;height: 18px;border-radius:5px;color: #E0B588;text-align: center;line-height:18px;border: 2px solid #E0B588;">
                      会&nbsp&nbsp员
                    </div>
                    <!-- 错误类别 -->
                    <div v-else style="font-weight: 900;font-size: 13px;background-color: #990011;width: 70px;height: 18px;border-radius:5px;color: #F5DF4D;text-align: center;line-height:18px;border: 2px solid #F5DF4D;">
                      异常类型
                    </div>
                  <!-- 积分 -->
                  <p style="margin: 10px 0px 0px 0px;font-size: 12px;font-weight: 600;">
                    积分:
                    <font style="color: #FF8705;">{{perInfo.integral}}</font>
                  </p>
                  <!-- 个人签名 -->
                  <p style="margin: 10px 0px 0px 0px;font-size: 12px;font-weight: 600;color: #909399;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                    {{perInfo.signature}}
                  </p>
                </div>
              </div>
              <!-- 侧面广告信息 -->
              <div style="width: 260px;height: 250px;border-radius: 6px;background-color: #FFFFFF;margin-top:10px;">
                <!-- 标题框 -->
                <div style="width: 100%;height: 25px;background-color: #303133;border-radius:5px 5px 0px 0px;text-align: left;">
                  <font style="padding: 0px 0px 0px 10px;line-height:25px;font-size:13px;font-weight:900;color: #FFFFFF;">广告信息</font>
                </div>
                <div v-if="advertisements && advertisements.length > 0">
                  <!-- 广告列表 -->
                  <div class="pl_hone_ad" v-for="advertisement in advertisements" :key="advertisement.id">
                    <a class="pl_hone_ad_a" :href="advertisement.url" target="_blank">{{advertisement.title}}</a>
                  </div>
                </div>
                <div v-else>
                  <div style="height: 210px;line-height: 210px;font-size: 15px;font-weight:600;color: #99a2aa;">暂无广告</div>
                </div>
              </div>
              <!-- 无人回复的陈旧话题 -->
              <div style="width: 260px;height: 240px;border-radius: 6px;background-color: #FFFFFF;margin-top:10px;">
                <!-- 标题框 -->
                <div style="width: 100%;height: 25px;background-color: #303133;border-radius:5px 5px 0px 0px;text-align: left;">
                  <font style="padding: 0px 0px 0px 10px;line-height:25px;font-size:13px;font-weight:900;color: #FFFFFF;">无人回复的陈旧话题</font>
                </div>
                <div v-if="noanswtops && noanswtops.length > 0">
                  <!-- 无人回复的陈旧话题列表 -->
                  <div class="pl_hone_ns" v-for="noanswtop in noanswtops" :key="noanswtop.id">
                    <a class="pl_hone_ns_a" :href="noanswtop.url" target="_blank">{{noanswtop.title}}</a>
                  </div>
                </div>
                <div v-else>
                  <div style="height: 210px;line-height: 210px;font-size: 15px;font-weight:600;color: #99a2aa;">暂无陈旧话题</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      contributions: {
        // 分页数据
        number:21,
        here:1,
        // 数据
        date:[
          {
            id:1,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:1,
            comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:2,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:1,
            comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转2',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:3,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:2,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转3',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:4,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:3,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转4',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:5,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:4,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转5',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:6,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:5,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转6',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:7,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转7',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:8,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转8',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:9,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转9',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:10,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转10',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:11,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转11',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:12,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转12',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:13,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转13',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:14,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转14',
            url: '/platform_article',
            time:'2021-01-21'
          },
          {
            id:15,
            img:'../../static/head/simanan.jpg',
            name:'黑山老幺的好的哈',
            types:6,
             comments:'7823',
            browse:'28347',
            collect:'82',
            title:'这个是测试标题，点击直接跳转15',
            url: '/platform_article',
            time:'2021-01-21'
          },
        ]
      },
      // 广告
      advertisements:[
        {
          id:1,
          title:'广告测试标题1',
          url:'/111111111',
        },
        {
          id:2,
          title:'广告测试标题2',
          url:'/111111111',
        },
        {
          id:3,
          title:'广告测试标题3',
          url:'/111111111',
        },
        {
          id:4,
          title:'广告测试标题4',
          url:'/111111111',
        },
        {
          id:5,
          title:'广告测试标题5',
          url:'/111111111',
        },
        {
          id:6,
          title:'广告测试标题6',
          url:'/111111111',
        },
        {
          id:7,
          title:'广告测试标题7',
          url:'/111111111',
        },
      ],
      // 无人回复的陈旧话题
      noanswtops:[
         {
          id:1,
          title:'无人回复测试标题1',
          url:'/111111111',
        },
        {
          id:2,
          title:'无人回复测试标题2',
          url:'/111111111',
        },
        {
          id:3,
          title:'无人回复测试标题3',
          url:'/111111111',
        },
        {
          id:4,
          title:'无人回复测试标题4',
          url:'/111111111',
        },
        {
          id:5,
          title:'无人回复测试标题5',
          url:'/111111111',
        },
        {
          id:6,
          title:'无人回复测试标题6',
          url:'/111111111',
        },
      ],
      // 个人信息
      perInfo:{
        img:'../../static/head/cmaple.jpg',
        name:'CMAPLE',
        type:0,
        integral:9999,
        signature:'这个人很懒，啥都没写！',
        lvl:12
      },
    }
  },
  methods: {
    // 获取页面高度
   getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    // 搜索按钮
    search(){

    },
    // 发布话题
    add(){
      let routeData = this.$router.resolve("/platform_add/");
      window.open(routeData.href, '_blank');
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
  .pl_hone_menu {
    width: 750px;
    height: 140px;
    margin: 1px 0px 0px 0px;
    background-color: #FFFFFF;
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
    font-size: 20px;
    color: #000000!important;
    font-weight:900;
    width: auto;
    height: auto;
  }
  .pl_a:hover{
    text-decoration: underline;
    font-size: 20px;
    color: #409EFF!important;
    font-weight:900;
    width: auto;
    height: auto;
  }
  /* 搜索按钮 */
  .search_button{
    width:99px;
    height:34px;
    border-radius:0px 5px 5px 0px;
    background-color:#67C23A;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    float: left;
    margin: 8px 0px 0px 0px;
  }
  .search_button:hover{
    width:99px;
    height:34px;
    border-radius:0px 5px 5px 0px;
    background-color:#2ea44f;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    float: left;
    margin: 8px 0px 0px 0px;
  }
  /* 发布按钮 */
  .add_button{
    border-radius:5px;
    background-color:#67C23A;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .add_button:hover{
    border-radius:5px;
    background-color:#2ea44f;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  /* 话题管理按钮 */
  .topic_button{
    border-radius:5px;
    background-color:#23B3D2;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .topic_button:hover{
    border-radius:5px;
    background-color:#3A8BC3;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  /* 用户管理按钮 */
  .useradmin_button{
    border-radius:5px;
    background-color:#F6736E;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .useradmin_button:hover{
     border-radius:5px;
    background-color:#B73335;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  /* 标签统一属性 */
  .label{
    width: 40px;
    height: 25px;
    border-radius:5px;
    color: #FFFFFF;
    text-align: center;
  }
  /* 广告列表 */
  .pl_hone_ad{
    font-weight:900;
    font-size: 15px;
    height: auto;
    padding: 10px 20px 0px 20px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .pl_hone_ad_a{
    text-decoration: none;
    color: #606266!important;
  }
  .pl_hone_ad_a:hover{
    text-decoration: underline;
    color: #409EFF!important;
  }
  /* 陈旧话题 */
    .pl_hone_ns{
    font-weight:900;
    font-size: 15px;
    height: auto;
    padding: 12px 20px 0px 20px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .pl_hone_ns_a{
    text-decoration: none;
    color: #606266!important;
  }
  .pl_hone_ns_a:hover{
    text-decoration: underline;
    color: #409EFF!important;
  }
  /* 分页按钮 */
  .pl_button{
    margin: 7.5px 2px 0px 0px;
    width: 35px;
    height: 25px;
    border: 0px solid #FFFFFF;
    background-color:#303133;
    border-radius: 5px;
    transition: .5s;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 900;
    outline: none;
    cursor: pointer;
    line-height: 25px;
  }
  .pl_button:hover{
    margin: 7.5px 2px 0px 0px;
    width: 35px;
    height: 25px;
    border: 0px solid #FFFFFF;
    background-color:#9CA1A3;
    transition: .5s;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 900;
    outline: none;
    cursor: pointer;
    line-height: 25px;
  }
</style>
