<template>
  <div style="width: 100%;background-color: #303133;height: 100%">
    <div v-bind:style="{height:pageheight+'px'}" style="width: 100%;">
      <div style="width:1024px;margin:0 auto 0;">
        <!-- 页头 -->
        <div style="width:100%;height:100px;">
          <!-- 主页图标 -->
          <div style="width: 50px;height: 50px;float: left;margin-top:10px;">
            <a href="/" style="text-decoration: none;">
              <img style="width: 40px;" src="../../static/logo.png">
            </a>
          </div>
          <!-- 注册按钮 -->
          <a href="/ContactPageUrl" style="text-decoration: none;">
            <div id="pl_menu_font">注册</div>
          </a>
        </div>
        <!-- 表单 -->
        <div style="width: 1024px;height:500px;margin-top:50px;position:fixed;margin: 0 auto 0;top:160px;">
          <!-- 文字内容 -->
          <div style="width:650px;height:400px;position:absolute;left:0px;top:0px;">
            <!-- 标题 -->
            <h1 class="noselect" style="color:#FFFFFF;font-size:66px!important;line-height: 76px!important;letter-spacing: -.03em!important;margin:40px 0px 5px 0px;text-align:left;">
              Where the world builds softwar
            </h1>
            <!-- 描述内容 -->
            <p class="noselect" style="color:#C0C4CC;font-size:24px!important;line-height: 25px!important;font-weight: 600!important;text-align:left;">
              Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
            </p>
          </div>
          <!-- 登陆表单 -->
          <div style="width: 330px;height: 400px;position:absolute;right:0px;top:0px;">
            <!-- 标题 -->
            <h1 style="color:#FFFFFF;font-size:28px;font-weight:900;">登陆CMAPLE.CN论坛</h1>
            <!-- 范围限制框 -->
            <div style="width: 300px;margin: 0 auto 0;text-align:left;">
              <!-- 账户 -->
              <div style="margin-top:40px;">
                <b style="color:#FFFFFF;">论坛账户:</b>
                <br>
                <input id="plun" style="width:95%;height:30px;border-radius:5px;padding:2px 10px 0px 10px;margin-top: 5px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;" type="text" name="plun">
              </div>
              <!-- 密码 -->
              <div style="margin-top: 20px;">
                <b style="color:#FFFFFF;">密码:</b>
                <br>
                <input id="plup" style="width:95%;height:30px;border-radius:5px;padding:2px 10px 0px 10px;margin-top: 5px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;" type="password" name="plup">
              </div>
              <!-- 验证码（暂时不实现） -->
              <!-- 登陆按钮 -->
              <div style="width:250px;height: auto;margin:50px 0px 0px 28px;">
                <button 
                  type="submit"
                  class="login"
                  @click="login()"                
                >登&nbsp&nbsp&nbsp陆</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 官网展示数据内容 -->
        <div style="width:1024px;height:120px;position:absolute;bottom:50px;text-align: center;">
          <!-- 分割线 -->
          <div class="divider div-transparent"></div>
          <!-- 数据展示内容 -->
          <!-- 活跃用户数量 -->
          <div class="statistical_div">
            <h1 class="statistical_h1">60+ 万</h1>
            <p class="statistical_p">活跃用户数量</p>
          </div>
          <!-- 组织数量 -->
          <div class="statistical_div">
            <h1 class="statistical_h1">2+ 万</h1>
            <p class="statistical_p">组织数量</p>
          </div>
          <!-- 发帖数量 -->
          <div class="statistical_div">
            <h1 class="statistical_h1">300+ 万</h1>
            <p class="statistical_p">发帖数量</p>
          </div>
          <!-- 全国活跃比例 -->
          <div class="statistical_div">
            <h1 class="statistical_h1">12%</h1>
            <p class="statistical_p">全国活跃比例</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //name: 'HelloWorld',
  data() {
    return {
      pageheight:'',
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    // 登陆
    login(){
      var that = this;
      that.$Global.alertMessage(that, '测试', '测试内容', 'success');
    },
    created() {
    //页面地址列表

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
}
</script>
<style type="text/css">
  /* 导航栏字体 */
   #pl_menu_font{
    width: 56px;
    height: 30px;
    padding: 5px 0px 0px 0px;
    margin: 10px 0px 0px 0px;
    border:1px solid #FFFFFF;
    border-radius: 7px;
    float: right;
    font-size: 18px;
    font-weight: 900;
    color:#FFFFFF;
  }
  #pl_menu_font:hover{
    width: 56px;
    height: 30px;
    padding: 5px 0px 0px 0px;
    margin: 10px 0px 0px 0px;
    border:1px solid #909399;
    border-radius: 7px;
    float: right;
    font-size: 18px;
    font-weight: 900;
    color:#909399;
  }
  /* 登陆按钮 */
  .login{
    width:250px;
    height:35px;
    border-radius:5px;
    background-color:#67C23A;
    color:#FFFFFF;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .5s;
  }
  .login:hover{
    width:250px;
    height:35px;
    border-radius:5px;
    background-color:#2ea44f;
    color:#FFFFFF;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .5s;
    box-shadow: 0 5px 28px #000000;
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
  /* 统计数据字体样式 */
  .statistical_div{
    display: inline-block;
    vertical-align: top;
    width: 120px;
    height: 100px;
    text-align: center;
    margin: 0px 50px 0px 50px;
  }
  .statistical_h1{
    color: #FFFFFF;
    margin: 30px 0px 0px 0px;
    font-size: 25px;
    font-weight: 600;
  }
  .statistical_p{
    color: #FFFFFF;
    margin: 10px 0px 0px 0px;
    font-size: 10px;
    font-weight: 400;
  }
</style>
