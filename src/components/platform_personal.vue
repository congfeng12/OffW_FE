<!-- 个人中心 -->
<template>
  <div style="width: 100%;background-color: #F0F0F0;" :style="{'min-height':pageheight+'px'}">
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
          <!-- 个人信息简介 -->
          <div style="width:1000px;height:auto;margin: 0 auto 0;position:relative;">
            <!-- 背景图 -->
            <div style="width:100%;height:240px;background-size: cover;" :style="{backgroundImage:'url('+perInfo.homepageImgUrl+')'}"></div>
            <!-- 用户信息栏位 -->
            <div style="width:100%;height:128px;background-color:#FFFFFF;box-shadow: 1px 1px 3px #DCDFE6;">
              <div style="text-align:left;padding: 10px 0px 0px 220px;">
                <!-- 名称 -->
                <h1 style="margin:0px;font-size:30px;font-weight:900;float:left;">{{perInfo.name}}</h1>
                <!-- 用户类型 -->
                <!-- 创始人 -->
                <div v-if="perInfo.type == 0" class="userlab" style="background-color: #000000;color: #F4B615;">创始人</div>
                <!-- 管理员 -->
                <div v-else-if="perInfo.type == 1" class="userlab" style="background-color: #1A4C7B;color: #DEE0EC;">管理员</div>
                <!-- 贡献者 -->
                <div v-else-if="perInfo.type == 2" class="userlab" style="background-color: #162E55;color: #E6BE90;">贡献者</div>
                <!-- 投资人 -->
                <div v-else-if="perInfo.type == 3" class="userlab" style="background-color: #9F383A;color: #F4DBB2;">投资人</div>
                <!-- 会员 -->
                <div v-else-if="perInfo.type == 4" class="userlab" style="background-color: #303133;color: #FBD51F;">会&nbsp员</div>
                <!-- 错误类别 -->
                <div v-else class="userlab" style="background-color: #990011;color: #F5DF4D;">异常类型</div>
                <!-- 用户等级标签 -->
                <!-- 创始人 -->
                <div class="userlab" style="background-color: #ED6C17;color: #FFFFFF;width: 40px;margin-left:7px;">lv{{perInfo.lvl}}</div>
                <!-- 用户编程语言标签 -->
                <div v-show="null != perInfo.lan" class="userlab" style="background-color: #00A2C4;color: #FFFFFF;width: 40px;margin-left:7px;">{{perInfo.lan}}</div>
                <!-- 个人签名 -->
                <p style="margin: 50px 0px 0px 0px;font-size: 14px;font-weight: 600;color: #909399;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                  {{perInfo.signature}}
                </p>
              </div>
              <!-- 用户uid -->
              <h1 style="font-size:12px;font-weight:600;position:absolute;right:20px;bottom:90px;color: #909399;">UID: {{perInfo.uid}}</h1>
              <!-- 写答案 -->
              <button id="reply_button" type="submit" class="reply_button" style="width:120px;height:30px;" @click="edirpd()">编辑个人资料</button>
            </div>
            <!-- 头像 -->
            <img style="width:150px;height:150px;position:absolute;left:20px;top:180px;border-radius:10px;border:5px solid #FFFFFF;" :src="perInfo.img">
          </div>
          <div style="width:1000px;height:auto;margin: 10px auto 40px;overflow:auto;">
            <!-- 左侧栏位 -->
            <div style="float:left;width:700px;min-height:300px;box-shadow: 1px 1px 3px #DCDFE6;background-color:#FFFFFF;text-align:left;padding: 0px 0px 20px 0px;">
              <!-- 发布过的帖子 -->
              <!-- 标题 -->
              <h1 style="margin:10px 0px 0px 10px;font-size:16px;">发布的话题</h1>
              <!-- 分割线 -->
              <hr color= #DCDFE6 size="1" style="margin: 8px 0px 8px 0px;">
              <!-- 内容 -->
              <div v-if="pertopic && pertopic.length > 0" v-for="topic in pertopic" style="padding: 10px 0px 0px 20px;overflow:auto;position:relative;margin-bottom: 10px;">
                <div style="position:relative;height:65px;margin-top:10px;overflow: hidden;">
                  <div style="float: left;width: 650px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                    <a class="pl_a" :href="topic.url">{{topic.title}}</a>
                  </div>
                  <!-- 关注数量 -->
                  <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:440px;bottom: 0px;font-size: 13px;font-weight:600;color: #99a2aa;">
                    关注：{{topic.collect}}
                  </div>
                   <!-- 评论数量 -->
                  <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:320px;bottom: 0px;font-size: 13px;font-weight:600;color: #99a2aa;">
                    评论：{{topic.comments}}
                  </div>
                  <!-- 浏览次数 -->
                  <div class="noselect" style="width:110px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:200px;bottom: 0px;font-size: 13px;font-weight:600;color: #99a2aa;">
                    浏览：{{topic.browse}}
                  </div>
                  <!-- 日期/发布提前时间 -->
                  <div class="noselect" style="width:210px;height:30px;padding: 0px;line-height: 30px;text-align: right;position: absolute;right:20px;bottom: 0px;font-size: 13px;font-weight:600;color: #99a2aa;">
                    发布于：{{topic.time}}
                  </div>
                </div>
              </div>
              <div v-else style="text-align:center;">
                <h1 class="noselect" style="font-size:16px;font-weight:400;color:#C0C4CC;margin-top:100px;">暂无发布话题</h1>
              </div>
            </div>
            <!-- 右侧栏位 -->
            <div style="width:290px;min-height:300px;float:right;">
              <!-- 经验&关注数量&点赞数量 -->
              <div style="width: 100%;padding-bottom: 10px;min-height:200px;box-shadow: 1px 1px 3px #DCDFE6;background-color:#FFFFFF;">
                <!-- 标题 -->
                <h1 style="margin:0px;font-size:16px;padding:10px 0px 0px 10px;text-align: left;">创作板块</h1>
                <!-- 分割线 -->
                <hr color= #DCDFE6 size="1" style="margin: 8px 0px 8px 0px;">
                <!-- 经验 -->
                <div style="width:100%;height:40px;margin-bottom: 20px;">
                  <div style="text-align:left;padding: 0px 0px 0px 15px;">
                    <font style="color: #303133;font-weight:800;font-size:16px;">经验：</font>
                  </div>
                  <div style="text-align:left;padding: 5px 0px 0px 15px;">
                    <font style="color:#606266;font-weight:600;font-size:15px;">1000 / 5000</font>
                  </div>
                </div>
                <div style="width:260px;height:100px;margin:0 auto 0;background-color:#F2F6FC;border-radius:3px;">
                  <!-- 关注 -->
                  <div style="width:129px;height:100px;text-align:center;float:left;">
                    <p style="margin:10px 0px 0px 0px;color: #606266;font-size:13px;font-weight:600;">今日阅读(播放)数</p>
                    <p style="margin:5px 0px 0px 0px;color: #000000;font-size:22px;font-weight:900;">1</p>
                    <p style="margin:5px 0px 0px 0px;color: #6385A6;font-size:12.5px;font-weight:600;">昨日数据 <font style="color: #303133;font-weight:900;">63</font></p>
                  </div>
                  <div style="width:1px;height:70px;background-color: #DCDFE6;float:left;margin: 15px 0px 0px 0.5px;"></div>
                  <!-- 点赞 -->
                  <div style="width:129px;height:100px;text-align:center;float:right;">
                    <p style="margin:10px 0px 0px 0px;color: #606266;font-size:13px;font-weight:600;">今日关注数</p>
                    <p style="margin:5px 0px 0px 0px;color: #000000;font-size:22px;font-weight:900;">0</p>
                    <p style="margin:5px 0px 0px 0px;color: #6385A6;font-size:12.5px;font-weight:600;">昨日数据 <font style="color: #303133;font-weight:900;">0</font></p>
                  </div>
                </div>
                <!-- 按钮 -->
                <!-- <button id="rbutton" type="submit" class="rbutton" @click="huati()">进入个人中心 ></button> -->
              </div>
              <!-- 个人成就 -->
              <div style="width: 100%;min-height:100px;margin-top: 10px;box-shadow: 1px 1px 3px #DCDFE6;background-color:#FFFFFF;">
                <!-- 关注 -->
                  <div style="width:144px;height:100px;text-align:center;float:left;">
                    <p style="margin:23px 0px 0px 0px;color: #606266;font-size:14px;font-weight:600;">关注了</p>
                    <p style="margin:8px 0px 0px 0px;color: #000000;font-size:18px;font-weight:900;">
                      <a @click="personal()" href="javascript:void(0)" class="guanzhu">847</a>
                    </p>
                  </div>
                  <div style="width:1px;height:70px;background-color: #DCDFE6;float:left;margin: 15px 0px 0px 0.5px;"></div>
                  <!-- 点赞 -->
                  <div style="width:144px;height:100px;text-align:center;float:right;">
                    <p style="margin:23px 0px 0px 0px;color: #606266;font-size:14px;font-weight:600;">关注者</p>
                    <p style="margin:8px 0px 0px 0px;color: #000000;font-size:18px;font-weight:900;">
                      <a @click="personal()" href="javascript:void(0)" class="guanzhu">201</a>
                    </p>
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
      // 个人信息
      perInfo:{
        uid: '100000001',
        img:'../../static/head/cmaple.jpg',
        homepageImgUrl:'../../static/personal_background.jpg',
        name:'CMAPLE',
        type:0,
        lvl:12,
        lan:'JAVA',
        signature:'这个人很懒，啥都没写！',
      },
      // 用户弹窗显示标记
      isuserinfo: false,
      // 消息弹窗显示标记
      isxiaoxi: false,
      // 未读消息数量
      noread:99,
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
      // 发布话题列表
      pertopic:[
        {
          title:'这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1',
          time:'2021-09-12',
          comments:'7823',
          browse:'28347',
          collect:'82',
          types:1,
          url: '/platform_article',
        },
        {
          title:'这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1',
          time:'2021-09-12',
          comments:'7823',
          browse:'28347',
          collect:'82',
          types:1,
          url: '/platform_article',
        },
        {
          title:'这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1',
          time:'2021-09-12',
          comments:'7823',
          browse:'28347',
          collect:'82',
          types:1,
          url: '/platform_article',
        },
        {
          title:'这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1',
          time:'2021-09-12',
          comments:'7823',
          browse:'28347',
          collect:'82',
          types:1,
          url: '/platform_article',
        },
        {
          title:'这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1这个是测试标题1',
          time:'2021-09-12',
          comments:'7823',
          browse:'28347',
          collect:'82',
          types:1,
          url: '/platform_article',
        },
      ],
    }
  },
  methods: {
    // 获取页面高度
   getPageHeight() {
      this.pageheight = window.innerHeight;
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
    // 编辑个人资料
    edirpd(){
       window.location.href="/platform_editpd/";
    },

  },
  created() {
    
  },
  destroyed() {

  },
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
  /* 写回答 */
  .reply_button{
    border-radius:5px;
    background-color:#FFFFFF;
    color:#303133;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    border: 1px solid #303133;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 0px 15px 0px 0px;
    position: absolute;
    right: 5px;
    bottom: 20px;
  }
  .reply_button:hover{
    border-radius:5px;
    background-color:#C0C4CC;
    color:#303133;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    border: 1px solid #303133;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 0px 15px 0px 0px;
    position: absolute;
    right: 5px;
    bottom: 20px;
  }
  /* 账户类型标签 */
  .userlab{
    font-weight: 900;
    font-size: 12px;
    width: 50px;
    height: 20px;
    border-radius:5px;
    text-align: center;
    line-height:20px;
    float:left;
    margin: 10px 0px 0px 20px;
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
  /* 话题标题 */
  .pl_a{
    text-decoration: none;
    font-size: 18px;
    color: #000000!important;
    font-weight:600;
    width: auto;
    height: auto;
  }
  .pl_a:hover{
    text-decoration: underline;
    font-size:18px;
    color: #409EFF!important;
    font-weight:600;
    width: auto;
    height: auto;
  }
  /* 写回答 */
.rbutton{
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
  width:260px;
  height:30px;
}
.rbutton:hover{
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
  width:260px;
  height:30px;
}
/* 关注连接 */
.guanzhu{
  color: #000000;
  text-decoration:none;
}
.guanzhu:hover{
  color: #409EFF;
  text-decoration:none;
}
</style>
