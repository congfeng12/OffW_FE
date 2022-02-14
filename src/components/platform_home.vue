<!-- 论坛首页 -->
<template>
  <div style="width: 100%;height: auto;background-color: #F0F0F0;">
      <div style="width: 100%;">
        <!-- 页头 -->
        <div style="background-color: #303133;width: 100%;height: 60px;">
          <!-- 宽度限制 -->
          <div style="width:1200px;margin:0 auto 0;position:relative;">
            <!-- 用户中心 -->
            <div style="float: left;padding: 0px 0px 0px 0px;">
              <a href="/platform_home/" style="text-decoration: none;">
                <font class="noselect" style="line-height: 60px;color: #FFFFFF;font-size: 20px;text-transform: uppercase;letter-spacing: 0.1em;font-weight: 900;">CMAPLE.CN 论坛</font>
              </a>
            </div>
            <div style="float: left;width:550px;padding: 5px 0px 0px 25px;">
               <!-- 搜索框 -->
               <input id="search" style="width:50%;height:30px;border-radius:20px 0px 0px 20px;padding:2px 10px 0px 10px;margin: 8px 0px 0px 20px;font-size:14px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .05em!important;float:left;" type="text" name="search" placeholder="请输入 标题/内容 的关键字">
               <!-- 按钮 -->
               <button id="search_button" type="submit" class="search_button" @click="search()">搜&nbsp&nbsp索</button>
            </div>
            <!-- 用户头像 -->
            <div style="float: right;padding: 10px 0px 0px 0px;">
              <a @click="userseting()" href="javascript:void(0)" style="text-decoration: none;">
                <img style="width: 40px;height: 40px;border-radius: 5px;" :src="perInfo.img">
              </a>
            </div>
            <!-- 消息 -->
            <div style="float: right;padding: 18px 80px 0px 0px;position: relative;">
              <div v-if="0 != noread" class="css-1q0jj93">{{noread}}</div>
              <a @click.preview="xiaoxi()" href="javascript:void(0)" style="text-decoration: none;">
                <img style="width: 25px;border-radius: 5px;" src="../../static/xiaoxi.png">
              </a>
            </div>
            <!-- 用户中心弹窗 -->
            <div v-show="true == isuserinfo" style="width:120px;height:auto;background-color: #FFFFFF;z-index: 203;border-radius: 5px;position: absolute;left: 1120px;top: 65px;box-shadow: 1px 1px 6px #909399;padding:7px 0px 7px 0px;" ref="tc_userinfo">
              <!-- 三角形 -->
              <div style="width: 0;height: 0;border-left: 8px solid transparent;border-right: 8px solid transparent;border-bottom: 10px solid #FFFFFF;position:absolute;top:-10px;left:53px;"></div>
              <!-- 按钮组 -->
              <!-- 我的主页 -->
              <div class="userinfo_button" @click="personal()">
                <img src="../../static/user.png" style="width: 15px;float:left;margin:14px 8px 0px 20px;">
                <div style="color: #99a2aa;line-height:45px;text-align:left;font-size:14px;font-weight:600;">我的主页</div>
              </div>
              <!-- 用户设置 -->
              <div class="userinfo_button" @click="shezhi()">
                <img src="../../static/shezhi.png" style="width: 15px;float:left;margin:14px 8px 0px 20px;">
                <div style="color: #99a2aa;line-height:45px;text-align:left;font-size:14px;font-weight:600;">用户设置</div>
              </div>
              <!-- 管理中心 -->
              <div class="userinfo_button" @click="shezhi()">
                <img src="../../static/shezhi.png" style="width: 15px;float:left;margin:14px 8px 0px 20px;">
                <div style="color: #99a2aa;line-height:45px;text-align:left;font-size:14px;font-weight:600;">管理中心</div>
              </div>
              <!-- 退出登录 -->
              <div class="userinfo_button" @click="tuichu()">
                <img src="../../static/tuichu.png" style="width: 15px;float:left;margin:14px 8px 0px 20px;">
                <div style="color: #99a2aa;line-height:45px;text-align:left;font-size:14px;font-weight:600;">退出登录</div>
              </div>
            </div>
            <!-- 消息弹窗 -->
            <div v-show="true == isxiaoxi" style="width:300px;height:500px;background-color: #FFFFFF;z-index: 203;border-radius: 5px;position: absolute;left: 920px;top: 65px;box-shadow: 1px 1px 6px #909399;" ref="tc_xiaoxi">
              <!-- 三角形 -->
              <div style="width: 0;height: 0;border-left: 8px solid transparent;border-right: 8px solid transparent;border-bottom: 10px solid #FFFFFF;position:absolute;top:-10px;left:140px;"></div>
              <!-- 标题 -->
              <div style="width：100%;height:50px;">
                <font style="line-height:50px;font-size:15px;color: #121212;">我的消息</font>
              </div>
              <!-- 分割线 -->
              <hr color= #DCDFE6 size="1" style="margin: 0px 0px 0px 0px;">
              <!-- 内容列表 -->
              <div style="overflow:auto;width:100%;height:410px;">
                <div v-for="(unmsg, index) in unreadMsg" class="unread_msg">
                  <a target="_blank" :href="unmsg.url">
                    <!-- 头像 -->
                    <div style="width:70px;height:70px;float:left;">
                      <img style="width: 40px;margin:15px auto 0px;border-radius: 5px;" :src="unmsg.head">
                    </div>
                    <!-- 文字内容 -->
                    <div style="width:230px;height:70px;float:right;text-align: left;">
                      <!-- 名称 -->
                      <h1 style="margin: 12px 0px 0px 0px;font-size:15px;font-weight:900;color: #303133;">{{unmsg.name}}</h1>
                      <!-- 内容 -->
                      <h2 style="font-size: 14px;font-weight: 600;color: #909399;padding: 0px 10px 0px 0px;margin: 5px 0px 0px 0px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                        {{unmsg.msg}}
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
              <!-- 分割线 -->
              <hr color= #DCDFE6 size="1" style="margin: 0px 0px 0px 0px;">
              <!-- 页面底部 -->
              <div style="width:100%;height: 39px;background-color: #FFFFFF;border-radius: 0px 0px 5px 5px;">
                <a class="open_all" @click="accusation()" href="javascript:void(0)">查看全部</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 页面内容 -->
        <div style="margin: 0 auto 0;margin-top: 10px;width: 1024px;overflow: hidden;">
          <div style="width:700px;height: auto;margin:0px;float:left;">
            <!-- 列表 -->
            <div class="pl_hone_menu" v-for="contribution in Articlesdate" :key="contribution.id">
              <div style="padding: 5px;height: 130px;position: relative;">
               <!-- 标签 -->
                <div class="noselect" style="width:50px;height:30px;padding: 0px;line-height: 25px!important;text-align: left;position: absolute;left:10px;top: 11px;font-weight: 900;font-size: 13.5px;">
                  <!-- 置顶 -->
                  <div v-if="contribution.types == 1" class="label" style="background-color: #67C23A;">
                    置顶
                  </div>
                  <!-- 热点 -->
                  <div v-else-if="contribution.types == 2" class="label" style="background-color: #A16DAF;">
                    热点
                  </div>
                  <!-- 精华 -->
                  <div v-else-if="contribution.types == 3" class="label" style="background-color: #FFAB00;">
                    精华
                  </div>
                  <!-- 公告 -->
                  <div v-else-if="contribution.types == 4" class="label" style="background-color: #EA2D16;">
                    公告
                  </div>
                  <!-- 新闻 -->
                  <div v-else-if="contribution.types == 5" class="label" style="background-color: #909399;">
                    新闻
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
                <!-- （暂时不实现） -->
                <!-- 关注数量 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:360px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  关注：{{contribution.collect}}
                </div>
                 <!-- 评论数量 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:270px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
                  评论：{{contribution.comments}}
                </div>
                <!-- 浏览次数 -->
                <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:175px;top: 105px;font-size: 13px;font-weight:600;color: #99a2aa;">
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
              <a href="javascript:void(0);" @click="selectArticles()" style="height:70px;line-height:70px;font-size:16px;text-decoration:none;color: #00c3ff;font-weight:600;">点击加载更多</a>
            </div>
          </div>
          <!-- 侧面功能按钮 -->
          <div style="width: 315px;height: 730px;float:right;">
             <div style="width: 315px;height:auto;">
              <!-- 侧面个人信息 -->
              <div style="width: 315px;height: auto;background-color: #FFFFFF;margin-top:0px;">
                <div style="width:300px;height: 50px;text-align:left;padding-left: 0px;border-radius:0px 0px 5px 0px;padding: 8px 0px 20px 15px;">
                  <!-- 用户名 -->
                  <h1 style="padding-right: 10px;line-height: 30px;font-size:20px;letter-spacing: .01em;font-weight: 900;margin: 10px 0px 0px 8px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"><font style="color: #606266;">欢迎：</font>
                    <a @click="personal()" href="javascript:void(0)" class="home_name">{{perInfo.name}}</a>
                  </h1>
                  <!-- 个人签名 -->
                  <p style="margin: 10px 0px 0px 8px;font-size: 12px;font-weight: 600;color: #909399;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                    个人签名：{{perInfo.signature}}
                  </p>
                </div>
                <div style="overflow: hidden;margin-top:20px;">
                  <!-- 发布话题 -->
                  <div style="width:  60px;float:left;text-align:center;margin: 0px 0px 0px 15px;" >
                    <a class="seting_a" @click="add()" href="javascript:void(0)">
                      <div style="width: 40px;height:40px;border-radius:50px;margin: 0 auto 0;background-color: #e5edff;">
                        <img style="width: 25px;margin: 7px 0px 0px 0px;" src="../../static/fabu.png">
                      </div>
                      <p style="margin: 5px 0px 0px 0px;">发布话题</p>
                    </a>
                  </div>                 
                  <!-- 广告申请 -->
                  <div style="width:  60px;float:left;text-align:center;margin: 0px 0px 0px 15px;" >
                    <a class="seting_a" @click="pl_adv()" href="javascript:void(0)">
                      <div style="width: 40px;height:40px;border-radius:50px;margin: 0 auto 0;background-color: #fff3e7;">
                        <img style="width: 25px;margin: 8px 0px 0px 0px;" src="../../static/huida.png">
                      </div>
                      <p style="margin: 5px 0px 0px 0px;">广告申请</p>
                    </a>
                  </div>
                  <!-- 投诉建议 -->
                  <div style="width:  60px;float:left;text-align:center;margin: 0px 0px 0px 15px;" >
                    <a class="seting_a" @click="proposal()" href="javascript:void(0)">
                      <div style="width: 40px;height:40px;border-radius:50px;margin: 0 auto 0;background-color: #fef9e7;">
                        <img style="width: 25px;margin: 8px 0px 0px 0px;" src="../../static/jianyi.png">
                      </div>
                      <p style="margin: 5px 0px 0px 0px;">投诉建议</p>
                    </a>
                  </div>
                  <!-- 用户设置 -->
                  <div style="width:  60px;float:left;text-align:center;margin: 0px 0px 0px 15px;" >
                    <a class="seting_a" @click="userset()" href="javascript:void(0)">
                      <div style="width: 40px;height:40px;border-radius:50px;margin: 0 auto 0;background-color: #e9f7f7;">
                        <img style="width: 25px;margin: 8px 0px 0px 0px;" src="../../static/guanli.png">
                      </div>
                      <p style="margin: 5px 0px 0px 0px;">用户设置</p>
                    </a>
                  </div>
                </div>
                <!-- 进入个人中心 -->
                <button id="reply_button" type="submit" class="reply_button" @click="huati()">进入个人中心 ></button>
              </div>
              <!-- 侧面广告信息 -->
              <div style="width: 315px;height: auto;background-color: #FFFFFF;margin-top:8px;padding-bottom:10px;">
                <!-- 广告列表 -->
                <div v-if="advertisements && advertisements.length > 0">
                <!-- 置顶广告位 -->
                <div  style="width:100%;">
                  <a class="extension" :href="advertisements[0].url" target="_blank">
                    <img style="width:93%;margin: 10px auto 0px;" :src="advertisements[0].images">
                    <h1 style="text-align:left;margin: 0px 0px 0px 10px;font-size:16px;">{{advertisements[0].title}}</h1>
                  </a>
                </div>
                <!-- 分割线 -->
                <hr color= #DCDFE6 size="1" style="margin: 10px 0px 10px 0px;">
                  <!-- 广告列表 -->
                  <div class="pl_hone_ad" v-show="0 != index" v-for="(advertisement, index) in advertisements" :key="advertisement.id">
                    <a class="pl_hone_ad_a" :href="advertisement.url" target="_blank">{{advertisement.title}}</a>
                  </div>
                </div>
                <div v-else>
                  <div style="height: 210px;line-height: 210px;font-size: 15px;font-weight:600;color: #99a2aa;">暂无广告</div>
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
        // 分页数据
        number:10,
        here:1,
        // 数据
        Articlesdate:[
          // {
          //   id:1,
          //   img:'../../static/head/simanan.jpg',
          //   name:'黑山老幺的好的哈',
          //   types:1,
          //   comments:'7823',
          //   browse:'28347',
          //   collect:'82',
          //   title:'这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1这个是测试标题，点击直接跳转1',
          //   url: '/platform_article',
          //   time:'2021-01-21'
          // },
          
        ],
      // 广告
      advertisements:[
        {
          id:1,
          title:'全新iphone开启预售',
          images:'../../static/tuiguang.png',
          url:'https://www.apple.com.cn/shop/buy-iphone/iphone-13',
        },
        {
          id:2,
          title:'广告测试标题2',
          images:'',
          url:'/111111111',
        },
        {
          id:3,
          title:'广告测试标题3',
          images:'',
          url:'/111111111',
        },
        {
          id:4,
          title:'广告测试标题4',
          images:'',
          url:'/111111111',
        },
        {
          id:5,
          title:'广告测试标题5',
          images:'',
          url:'/111111111',
        },
        {
          id:6,
          title:'广告测试标题6',
          images:'',
          url:'/111111111',
        },
        {
          id:7,
          title:'广告测试标题7',
          images:'',
          url:'/111111111',
        },
        {
          id:8,
          title:'广告测试标题8',
          images:'',
          url:'/111111111',
        },
      ],
      // 未读消息
      unreadMsg:[
        {
          head:'../../static/head/M_Studio.jpg',
          name:'M_Studio',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
        {
          head:'../../static/head/luoxiang.jpg',
          name:'罗翔',
          msg:'精神内耗的人日常最多的体会就是累，没来由的累。曾经我就是一个这样的人，感觉对生活失去了兴趣，花了很长时间才最终调整过来。 为了能够帮助到更',
          url:'/platform_article'
        },
      ],
      // 个人信息
      perInfo:{
        img:'../../static/head/cmaple.jpg',
        name:'CMAPLE',
        type:0,
        lvl:12,
        signature:'这个人很懒，啥都没写！',
      },
      // 未读消息数量
      noread:99,
      // 用户弹窗显示标记
      isuserinfo: false,
      // 消息弹窗显示标记
      isxiaoxi: false,

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
    // 打开用户二级菜单
    userseting(){
      this.isuserinfo = !this.isuserinfo;
      this.isxiaoxi = false;
    },
    // 打开消息二级菜单
    xiaoxi(){
      this.isxiaoxi = !this.isxiaoxi;
      this.isuserinfo = false;
    },
    // 跳转个人中心
    personal(){
      // let routeData = this.$router.resolve("/platform_personal/");
      // window.open(routeData.href, '_blank');
      window.location.href="/platform_personal/";
    },
    // 投诉建议
    proposal(){
      let routeData = this.$router.resolve("/platform_proposal/");
      window.open(routeData.href, '_blank');
    },
    // 广告申请
    pl_adv(){
      let routeData = this.$router.resolve("/platform_advertisements/");
      window.open(routeData.href, '_blank');
    },
    // 用户设置
    userset(){
      let routeData = this.$router.resolve("/platform_userseting/");
      window.open(routeData.href, '_blank');
    },
    selectArticles(){
      //设置必要参数
      var that = this;
      //获取团队管理信息
        this.$Axios.post(this.$Config.Back_End_Service+this.$Config.selectArticles,
        this.$qs.stringify({
          uip: localStorage.getItem("cip"),
          lastplace: localStorage.getItem("cname"),
          page: this.here,
          num: this.number
        }))
      .then(function(res){
        if (res.data.RTCODE == 'success') {
          if (res.data.RTDATA.length > 0) {
            // 帖子
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_articles = new Object();
              // 帖子id号
              c_articles.id = res.data.RTDATA[i].id;
              // 头像图片
              c_articles.img = "../../static/head/zaker.jpg";
              // 账户昵称
              c_articles.name = res.data.RTDATA[i].operator;
              // 类型
              c_articles.types = res.data.RTDATA[i].atype;
              // 评论
              c_articles.comments = res.data.RTDATA[i].id;
              // 浏览
              c_articles.browse = res.data.RTDATA[i].id;
              // 关注
              c_articles.collect = res.data.RTDATA[i].id;
              // 标题
              c_articles.title = res.data.RTDATA[i].title;
              // 域名
              c_articles.url = "/platform_article?id="+res.data.RTDATA[i].id;
              // 时间
              c_articles.time = res.data.RTDATA[i].createtime.split(" ")[0];
              that.Articlesdate.push(c_articles);
            }
            that.here += 1;
          }else{
            that.$Config.alertMessage(that, "没有更多的帖子了！！！", res.data.RTMSG, "warn");
          }
        }else{
          //异常结果显示
          that.$Config.alertMessage(that, "获取帖子列表信息失败！", res.data.RTMSG, "error");
        }
      })
      .catch(function(err){
        that.$Config.alertMessage(that, "获取获取帖子列表信息函数异常！", err+'', "error");
      });
    },
  },
  created() {
    this.selectArticles();
  },
  destroyed() {},
  mounted() {
   //页面高度赋值
    window.onresize = () => {
      return (() => {
        this.getPageHeight()
      })()
    }
    this.getPageHeight();
    var that = this;
    // 
    document.addEventListener('click', function(e){
      // if (!that.$refs.tc_userinfo.contains(e.target) && that.isuserinfo) {
      //   that.isuserinfo = false;
      // }
    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 团队管理展示标签 */
  .pl_hone_menu {
    width: 700px;
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
    border-radius:0px 20px 20px 0px;
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
    border-radius:0px 20px 20px 0px;
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
    font-size: 13px;
    height: auto;
    padding: 8px 0px 0px 10px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .pl_hone_ad_a{
    text-decoration: none;
    color: #909399;
  }
  .pl_hone_ad_a:hover{
    text-decoration: none;
    color: #409EFF;
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
    color: #909399!important;
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
  /* 消息提示角标 */
  .css-1q0jj93 {
    margin: 0px;
    min-width: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(241, 64, 60);
    padding-left: 4px;
    padding-right: 4px;
    position: absolute;
    left: 13%;
    top: 18%;
    font-weight: 600;
    font-size: 8px;
    border-radius: 20px;
    border: 2px solid rgb(255, 255, 255);
  }
  /* 弹窗按钮 */
  .userinfo_button{
    width:100%;
    height:40px;
    cursor:pointer;
  }
  .userinfo_button:hover{
    width:100%;
    height:40px;
    background-color: #F2F6FC;
    cursor:pointer;
  }
  /* 评论按钮 */
.seting_a{
  text-decoration:none;
  font-size:12px;
  color: #444444;
  font-weight: 600;
}
.seting_a:hover{
  text-decoration:none;
  font-size:12px;
  color: #0078A3;
  font-weight: 600;
}
/* 写回答 */
.reply_button{
  border-radius:5px;
  background-color:#303133;
  color:#FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  border: 1px solid #FFFFFF;
  outline: none;
  cursor: pointer;
  transition: .5s;
  margin: 15px auto 10px;
  width:280px;
  height:30px;
}
.reply_button:hover{
  border-radius:5px;
  background-color:#606266;
  color:#FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  border: 1px solid #FFFFFF;
  outline: none;
  cursor: pointer;
  transition: .5s;
  margin: 15px auto 10px;
  width:280px;
  height:30px;
}
/* 推广 */
.extension{
  text-decoration:none;
  color: #909399;
}
.extension:hover{
  text-decoration:none;
  color: #409EFF;
}
/* 未读消息 */
.unread_msg{
  width:100%;
  height: 70px;
  padding: 0px 0px 0px 0px;
}
.unread_msg:hover{
  width:100%;
  height: 70px;
  padding: 0px 0px 0px 0px;
  background-color: #F2F6FC;
}
/* 查看全部 */
.open_all{
    font-size: 13.5px;
    font-weight: 600;
    color: #909399;
    text-decoration:none;
    float: right;
    margin: 10px 10px 0px 0px;
  }
  .open_all:hover{
    font-size: 13.5px;
    font-weight: 600;
    color: #606266;
    text-decoration:none;
    float: right;
    margin: 10px 10px 0px 0px;
  }
  /* 用户名字 */
  .home_name{
    color: #000000;
    text-decoration:none;
  }
  .home_name:hover{
    color: #409EFF;
    text-decoration:none;
  }
</style>
