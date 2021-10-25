<!-- 投诉建议 -->
<template>
  <div style="width: 100%;height: 100%;background-color: #F0F0F0;">
    <div style="width: 100%;background-color: #F0F0F0;">
       <!-- 页头 -->
        <div style="background-color: #303133;width: 100%;height: 60px;">
          <!-- 用户中心 -->
           <div style="float: left;padding: 0px 0px 0px 42px;">
            <font class="noselect" style="line-height: 60px;color: #FFFFFF;font-size: 23px;text-transform: uppercase;letter-spacing: 0.2em;font-weight: 900;">CMAPLE.CN 论坛</font>
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
        <!-- 内容 -->
        <div style="width: 1024px;background-color: #FFFFFF;margin: 0 auto 0;border-radius: 6px;margin-top:40px;"> 
          <!-- 标题 -->
          <div style="width:1024px;height: 50px;text-align: left;">
            <h1 class="noselect" style="font-size: 16px;margin: 0px 0px 0px 40px;line-height: 50px;font-weight:900;">投诉建议</h1>
          </div>
          <!-- 分割线 -->
          <hr color= #DCDFE6 size="1" style="margin: 0px;">
          <!-- 标题 -->
          <div style="width:223px;text-align: right;position:absolute;top:150px;">
            <!-- 标题 -->
            <h1 style="margin: 60px 50px 0px 0px;font-size:18px;">用户名：</h1>
            <!-- 内容 -->
            <h1 style="margin: 70px 50px 0px 0px;font-size:18px;">问题类型：</h1>
            <!-- 选择板块 -->
            <h1 style="margin: 60px 50px 0px 0px;font-size:18px;">内容：</h1>
          </div>
          <!-- 内容 -->
          <div style="width:800px;height: auto;">
            <!-- 用户名 -->
            <div style="height:auto;margin: 60px 115px 0px 240px!important;">
              <input id="title" readonly type="text" name="addtitle" class="pl_add_input" v-model="username">
            </div>
            <!-- 问题类型 -->
            <div style="height: auto;margin:10px 0px 0px 240px;">
              <select v-model="selectval" class="pl_add_select">
                <option value="">请选择问题类型</option>
                <option value="1">账户问题</option>
                <option value="2">平台问题</option>
                <option value="3">BUG反馈</option>
                <option value="4">投诉问题</option>
              </select>
            </div>
            <!-- 富文本编辑器 -->
            <div id="edidiv" style="margin: 55px 0px 0px 240px!important;height:auto;">
              <textarea class="proposal_textarea"></textarea>
            </div>
            <!-- 发布按钮 -->
            <div style="height:auto;width:200px;margin: 40px 0px 0px 370px;">
              <button v-bind:disabled="isShowBatchSend" class="pl_add_button" type="" @click="">发布</button>
            </div>
            <div style="height:20px"></div>
          </div>
        </div>
        <div style="height:40px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 页面高度
      pageheight: '',
      // 用户名 (直接从用户登陆信息获取)
      username:'*********@**.com',
      // 富文本内容
      contents:'',
      // 选择内容
      selectval:'',
      // 个人信息
      perInfo:{
        img:'../../static/head/gentleman.png',
        name:'黑山老幺的好的哈',
        type:0,
        integral:9999,
        signature:'这个人很懒，啥都没写！',
        lvl:12
      },
      // 按钮是否可用
      isShowBatchSend: false,

    }
  },
  methods: {
    // 
    init(){
      this.$quill.insertEmbed(0, 'image',{width:'800px'});
    },
    // 获取页面高度
    getPageHeight() {
      this.pageheight = window.innerHeight;
    },
     // 失去焦点
    oneditorblur(editor){

    },
    // 获取焦点
    oneditorfocus(editor){

    },
    // 编辑器文本发生变化
    oneditorchange(editor,html,text){
      this.contents = editor;
      console.log(this.contents);
    },
  },
  created() {
    
  },
  destroyed() {},
  mounted() {
   //页面高度赋值
    window.onresize = () => {
      return (() => {
        this.getPageHeight();
      })()
    }
    this.getPageHeight();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  /* 标题框 */
  .pl_add_input{
    width: 640px;
    height: 40px;
    font-weight: 900;
    border: 1px solid #C0C4CC;
    border-radius: 5px;
    outline-color: #409EFF;
    letter-spacing: .1em;
    font-size: 1.2em;
    color: #909399;
  }
  /* 富文本编辑器样式 */
  .pl_quill{
    height: 500px;
    width: 645px;
    text-align: left;
    padding: 0px;
  }
  /* 选择框 */
  .pl_add_select{
    width: 200px;
    height: 30px;
    text-align: left;
    margin:  40px 520px 0px 0px;
    border: 1px solid #C0C4CC;
    font-size: 1em;
    border-radius: 5px;
    outline-color: #409EFF;
  }
  /* 发布按钮 */
  .pl_add_button{
    width: 240px;
    height: 40px;
    border-radius:5px;
    background-color:#409EFF;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 40px;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .pl_add_button:hover{
     width: 240px;
    height: 40px;
    border-radius:5px;
    background-color:#007BBF;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 40px;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .pl_add_button:disabled{
    width: 240px;
    height: 40px;
    border-radius:5px;
    background-color:#BD1921;
    color:#FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    line-height: 40px;
    border: 0px solid #FFFFFF;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  /* 富文本编辑器 */
  .proposal_textarea{
    width: 646px;
    height: 400px;
    font-size: 20px;
    border: 1px solid #C0C4CC;
    border-radius: 5px;
  }
</style>
