<template>
  <div style="width: 100%;background-color: #303133;height: 100%;">
    <div v-bind:style="{height:pageheight+'px'}" style="width: 100%;">
      <div style="width:1024px;margin:0 auto 0;">
        <!-- 页头 -->
        <div style="width:100%;height:50px;">
          <!-- 主页图标 -->
          <div style="width: 50px;height: 50px;float: left;margin-top:10px;">
            <a href="/" style="text-decoration: none;">
              <img style="width: 40px;" src="../../static/logo.png">
            </a>
          </div>
          <!-- 注册按钮 -->
          <a :href="signin" style="text-decoration: none;">
            <div id="pl_menu_font">登陆</div>
          </a>
        </div>
        <!-- 注册表单 -->
        <div style="width: 100%;height: auto;margin-top:70px;">
          <!-- 宽度限制 -->
          <div style="width: 450px;height: auto;margin:0 auto 0;">
            <!-- 标题框 -->
            <div style="width: 100%;height: auto;text-align:center;padding: 0;" class="noselect">
              <font style="font-size:40px;line-height: 1.5;font-weight:900;color: #FFFFFF;">欢迎使用</font>
              <br>
              <font style="font-size:30px;line-height: 1.5;font-weight:400;color: #FFFFFF;">CMAPLE.CN</font>
            </div>
            <!-- 表单框 -->
            <div style="position:fixed;">
              <!-- 账户 -->
              <div style="margin-top:30px;width: 450px;">
                <b style="color:#FFFFFF;position:absolute;left:57px;">邮箱:</b>
                <br>
                <input id="plun" style="width:70%;height:30px;border-radius:5px;padding:2px 10px 0px 10px;margin-top: 10px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .05em!important;" type="text" name="plun">
              </div>
              <!-- 验证码 -->
              <div style="margin-top:20px;width: 450px;">
                <b style="color:#FFFFFF;position:absolute;left:57px;">邮箱验证码:</b>
                <br>
                <input id="plun" style="width:48%;height:30px;border-radius:5px 0px 0px 5px;padding:2px 10px 0px 10px;margin: 10px 98px 0px 0px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .1em!important;" type="text" name="plun">
                 <button id="emal_button" type="submit" class="emal_button" @click="Verification($event.target)">获取验证码</button>
              </div>
              <!-- 密码 -->
              <div style="margin-top:20px;width: 450px;">
                <b style="color:#FFFFFF;position:absolute;left:57px;">密码:</b>
                <br>
                <input id="plun" style="width:70%;height:30px;border-radius:5px;padding:2px 10px 0px 10px;margin-top: 10px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .15em!important;" type="password" name="plun">
              </div>
              <!-- 确认密码 -->
              <div style="margin-top:20px;width: 450px;">
                <b style="color:#FFFFFF;position:absolute;left:57px;">确认密码:</b>
                <br>
                <input id="plun" style="width:70%;height:30px;border-radius:5px;padding:2px 10px 0px 10px;margin-top: 10px;font-size:18px;color:#606266;font-weight:600;border:1px solid #F2F6FC;outline:none;letter-spacing: .15em!important;" type="password" name="plun">
              </div>
              <!-- 登陆按钮 -->
              <div style="width:250px;height: auto;margin: 0 auto 0;margin-top: 45px;">
                <button 
                  type="submit"
                  class="login"
                  @click="signup()"                
                >注&nbsp&nbsp&nbsp册</button>
              </div>
            </div>
          </div>
          <div style="width:1024px;height: 80px;position:absolute;bottom:10px;text-align: center;">
            <!-- 分割线 -->
            <div class="divider div-transparent"></div>
            <div style="width: 550px;margin: 15px auto 0;text-align: left;color: #C0C4CC;font-size:10px;line-height: 1.5;">
              <font>创建帐户即表示您同意 服务条款。有关 CMAPLE.CN 隐私惯例的更多信息，请参阅 CMAPLE.CN 隐私声明。我们偶尔会向您发送与帐户相关的电子邮件。</font>
            </div>
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
      // 页面高度
      pageheight:'',
      // 验证码倒计时
      countdown: 60,
      // 登陆页面
      signin:'',
    }
  },
  methods: {
    // 获取当前浏览器页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
    // 注册
    signup(){
      var that = this;
      // 论坛登陆
      this.$Axios.post(this.$Config.Back_End_Service+this.$Config.getContributionInfo,
      this.$qs.stringify({
        uip: localStorage.getItem("cip"),
        lastplace: localStorage.getItem("cname")
      }))
      .then(function(res){
        if (res.data.RTCODE == 'success') {
          // 结果处理




        }else{
          //异常结果显示
          that.$Config.alertMessage(that, "账户注册返回信息异常！", res.data.RTMSG, "error");
        }
      })
      .catch(function(err){
        that.$Config.alertMessage(that, "账户注册函数异常！", err+'', "error");
      });
    },
    // 发送验证码
    Verification(obj){
      var thst = this;
      if (this.countdown == 60) {
        this.$Config.alertMessage(this, "验证码：", "验证码已发送，请注意查收！", "success");
      }
      //倒计时
      // obj = document.getElementById("emal_button");
      if (this.countdown == 0) {
          obj.removeAttribute("disabled");
          obj.innerHTML="获取验证码";
          this.countdown = 60;
          return;
      } else {
          obj.setAttribute("disabled", true);
          obj.innerHTML=this.countdown + "秒后再试";
          this.countdown--;
      }
      setTimeout(function() {
          thst.Verification(obj) }
          ,1000)
    },
  },
  created() {
  // 页面地址列表
    this.signin = this.$Config.Signin;
  },
  destroyed() {},
  mounted() {
    // 页面高度赋值
    window.onresize = () => {
      return (() => {
        this.getPageHeight()
      })()
    }
    this.getPageHeight()
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
  /* 发送验证码按钮 */
  .emal_button{
    width:99px;
    height:34px;
    border-radius:0px 5px 5px 0px;
    background-color:#E6A23C;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 1px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    position: absolute;
    right: 56px;
    top: 148px;
  }
  .emal_button:disabled{
    width:99px;
    height:34px;
    border-radius:0px 5px 5px 0px;
    background-color:#F56C6C;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 1;
    border: 1px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    position: absolute;
    right: 56px;
    top: 148px;
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
