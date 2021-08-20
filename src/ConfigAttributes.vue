<script type="text/javascript">
//公共属性
//后台服务前置名称
const Back_End_Service = 'http://localhost:8080' //'http://www.cmaple.cn/MAIN_SERVICE'      'http://localhost:8080'
//备案号
const Record_No = '浙ICP备19041141号'
//网站运行年限
const Run_Time_Range = '@2019-2021'
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
//联系我们
const ContactPageUrl = '/Contact'
//登陆
const Signin = '/platform_signin'
//注册
const Signup = '/platform_signup'
//请求链接
//关于页面团队贡献等信息获取函数
const getContributionInfo = '/basic/contributionInfo'
//服务页面案例信息获取函数
const getCases = '/basic/cases'
//服务页面项目信息获取函数
const getPrograms = '/basic/programs'
//公共方法
//保存cookie
function setCookie(c_name, value, expiredays) {
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
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
// 消息提示
function alertMessage(in_th, in_title, in_text, in_type) {
  in_th.$notify({
    group: 'cmaple',
    title: in_title,
    text: in_text,
    type: in_type,
    duration:5000,
    speed:500
  });
}
// 暴露出这些属性和方法
export default {
  //静态参数
  Back_End_Service,
  Record_No,
  Run_Time_Range,
  Domain_Name,
  GitHubURL,
  HomePageUrl,
  AboutPageUrl,
  ServicePageUrl,
  ContactPageUrl,
  Signin,
  Signup,
  //链接地址
  getContributionInfo,
  getCases,
  getPrograms,
  //函数
  setCookie,
  getCookie,
  delCookie,
  alertMessage,
}

</script>
