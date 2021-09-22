<!-- 个人中心 -->
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
            <!-- 用户头像 -->
            <div style="float: right;padding: 10px 0px 0px 0px;">
              <a @click="userseting()" href="javascript:void(0)" style="text-decoration: none;">
                <img style="width: 40px;border-radius: 5px;" :src="perInfo.img">
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
            <div style="width:100%;height:240px;background-size: cover;" :style="{backgroundImage:'url('+homepageImgUrl+')'}"></div>
            <!-- 用户信息栏位 -->
            <div style="width:100%;height:118px;background-color:#FFFFFF;box-shadow: 1px 1px 3px #DCDFE6;">
              <div style="text-align:left;background-color: #E6A23C;padding: 10px 0px 0px 220px;">
                <!-- 名称 -->
                <h1 style="margin:0px;font-size:30px;font-weight:900;">{{perInfo.name}}</h1>
                <!-- 用户类型 -->
                <!-- 个人签名 -->
              </div>
            </div>
            <!-- 头像 -->
            <img style="width:150px;position:absolute;left:20px;top:180px;border-radius:10px;border:5px solid #FFFFFF;" :src="perInfo.img">
          </div>
          <div style="width:1000px;height:500px;margin: 10px auto 40px;background-color:#FFFFFF;box-shadow: 1px 1px 3px #DCDFE6;">
            
          </div>
          <!-- 帖子&回复&关注 -->
          <!-- 个人成就&关注列表 -->
        </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 背景图
      homepageImgUrl:'../../static/personal_background.jpg',
      // 个人信息
      perInfo:{
        img:'../../static/head/cmaple.jpg',
        name:'CMAPLE',
        type:0,
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
  },
  created() {
    
  },
  destroyed() {

  },
  mounted() {
  
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
</style>
