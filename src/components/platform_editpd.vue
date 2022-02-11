<!-- 编辑个人资料 -->
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
                      <img style="width: 40px;margin:15px auto 0px;border-radius: 5px;background-color:red;" :src="selectImg">
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
            <div style="width:100%;height:auto;background-color:#FFFFFF;box-shadow: 1px 1px 3px #DCDFE6;">
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
              </div>
              <!-- 用户uid -->
              <h1 style="font-size:12px;font-weight:600;position:absolute;right:20px;top:250px;color: #909399;">UID: {{perInfo.uid}}</h1>
              <!-- 信息修改栏位 -->
              <div style="width:800px;height:auto;margin: 120px auto 0;">
                <!-- 左侧标题 -->
                <div style="width: 150px;height: auto;float:left;text-align:right;">
                  <!-- 个人签名 -->
                  <h1 class="editTitle" style="margin-top:10px;">个人签名：</h1>
                  <!-- 性别 -->
                  <h1 class="editTitle">性别：</h1>
                  <!-- 电话号码 -->
                  <h1 class="editTitle">电话号码：</h1>
                  <!-- 电子邮箱 -->
                  <h1 class="editTitle">电子邮箱：</h1>
                  <!-- 居住地址 -->
                  <h1 class="editTitle">居住地址：</h1>
                  <!-- 毕业院校 -->
                  <h1 class="editTitle">毕业院校：</h1>
                  <!-- 职业经历 -->
                  <h1 class="editTitle">职业经历：</h1>
                  <!-- 主要编程语言 -->
                  <h1 class="editTitle">主要编程语言：</h1>
                  <!-- 个人域名 -->
                  <h1 class="editTitle" style="margin-bottom: 60px;">个人域名：</h1>
                </div>
                <!-- 右侧内容 -->
                <div style="width: 650px;height: auto;float:right;text-align:left;">
                  <!-- 个人签名 -->
                  <textarea class="edit_type" style="margin: 10px 0px 0px 100px;width: 500px;height: 60px;">{{perInfo.signature}}</textarea>
                  <!-- 性别 -->
                  <div style="margin: 28px 0px 0px 100px;">
                    <input type="radio" name="girl">女
                    <input type="radio" name="boy" >男
                    <input type="radio" name="unknow">保密
                  </div>
                  <!-- 电话号码 -->
                  <input class="edit_type" style="margin: 75px 0px 0px 100px;width: 500px;" type="text" name="">
                  <!-- 电子邮箱 -->
                  <input class="edit_type" style="margin: 70px 0px 0px 100px;width: 500px;" type="text" name="">
                  <!-- 居住地址 -->
                  <textarea class="edit_type" style="margin: 70px 0px 0px 100px;width: 500px;height: 60px;"></textarea>
                  <!-- 毕业院校 -->
                  <input class="edit_type" style="margin: 20px 0px 0px 100px;width: 500px;" type="text" name="">
                  <!-- 职业经历 -->
                  <input class="edit_type" style="margin: 70px 0px 0px 100px;width: 500px;" type="text" name="">
                  <!-- 主要编程语言 -->
                  <div style="height: auto;margin:70px 0px 0px 100px;">
                    <select v-model="selectval" class="edit_type">
                      <option value="">请选择主要编程语言</option>
                      <option value="C">C</option>
                      <option value="JAVA">JAVA</option>
                      <option value="PYTHON">PYTHON</option>
                      <option value="C++">C++</option>
                      <option value="C#">C#</option>
                      <option value="JAVASCRIPT">JAVASCRIPT</option>
                      <option value="SWIFT">SWIFT</option>
                      <option value="GO">GO</option>
                    </select>
                  </div>
                  <!-- 个人域名 -->
                  <input class="edit_type" style="margin: 70px 0px 0px 100px;width: 500px;" type="text" name="">
                </div>
                <!-- 按钮组 -->
              </div>
              <div style="height:auto;width:600px;margin: 0 auto 0;">
                <button v-bind:disabled="isShowBatchSend" class="follow_button" type="" @click="">保存</button>
              </div>
              <!-- 网页页面下扩展 -->
              <div style="width:1000px;height:auto;margin: 10px auto 40px;overflow:auto;">
              </div>
            </div>
            <!-- 头像 -->
            <img style="width:150px;height:150px;position:absolute;left:20px;top:180px;border-radius:10px;border:5px solid #FFFFFF;" :src="perInfo.img">
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
      selectval:'',
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
      //
      selectImg:'../../static/xiangji.jpg',
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
      let routeData = this.$router.resolve("/platform_editpd/");
      window.open(routeData.href, '_blank');
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
  /* 修改页面信息标题 */
  .editTitle{
    font-size:15px;
    font-weight: 600;
    margin:80px 0px 0px 0px;
  }
  /* 选择框 */
  .edit_type{
    width: 200px;
    height: 30px;
    text-align: left;
    border: 1px solid #C0C4CC;
    font-size: 1em;
    border-radius: 5px;
    outline-color: #409EFF;
  }
  /* 发布按钮 */
  .follow_button{
    width:300px;
    height:40px;
    border-radius:5px;
    background-color:#303133;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 60px 0px 40px 0px;
  }
  .follow_button:hover{
    width:300px;
    height:40px;
    border-radius:5px;
    background-color:#909399;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 60px 0px 40px 0px;
  }
</style>
