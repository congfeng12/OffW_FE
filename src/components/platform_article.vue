<template>
  <div style="width: 100%;height: 100%;">
    <div style="" :style="{height:pageheight+'px'}">
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
      <!-- 内容 -->
      <!-- 帖子标题 -->
      <!-- 帖子内容 -->
      <div>
        <div id="vhtml" v-html="content"></div>
      </div>
      <!-- 帖子评论 -->
    </div>
    <!-- 页脚 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
       // 页面高度
      pageheight: '',
      // 页面内容
      content:'',
    }
  },
  methods: {
    // 获取页面高度
   getPageHeight() {
      this.pageheight = window.innerHeight;
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
  /* 内容展示 */
  #vhtml{
    width: 800px;
    max-width:800px; 
    height: auto;
    margin: 0 auto 0;
    text-align: left;
    line-height:1.6;
    word-break: break-word;
    color:#000000;
    font-weight:500;
  }
  /*  */
  p{
    margin-top: 1px;
    padding-top: 0px;
  }
</style>
