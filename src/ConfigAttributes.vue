<script type="text/javascript">
    //公共属性
    //后台服务前置名称
    const Back_End_Service = 'http://www.cmaple.cn/MAIN_SERVICE'//'/MAIN_SERVICE'
    //备案号
    const Record_No = '浙ICP备19041141号'
    //网站运行年限
    const Run_Time_Range = '@2019-2020'
    //网站域名
    const Domain_Name = 'CMAPLE.CN'
    //GitHubURL
    const GitHubURL = 'https://github.com/congfeng12'
    //主页
    const HomePageUrl = '/'
    //关于
    const AboutPageUrl = '/About'
    //服务领域
    const ServicePageUrl = '/Service'
    //公共方法
    //保存cookie
    function setCookie (c_name, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }
    //获取cookie
    function getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
      return (arr[2]);
      else
      return null;
    }
    //删除cookie
    function delCookie (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
    // 暴露出这些属性和方法
    export default {
      Back_End_Service,
      Record_No,
      Run_Time_Range,
      Domain_Name,
      GitHubURL,
      HomePageUrl,
      AboutPageUrl,
      ServicePageUrl,
      setCookie,
      getCookie,
      delCookie,
    }
</script>