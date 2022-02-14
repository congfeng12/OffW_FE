<!-- 帖子 -->
<template>
  <div style="width: 100%;background-color:#F0F0F0;">
    <div class="noselect" style="background-color:#FFFFFF;">
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
            <div class="userinfo_button" @click="zhuye()">
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
      <!-- 内容 -->
      <div id="vhtml">
        <!-- 帖子标题 -->
        <div>
          <h1 style="font-size: 30px;font-weight: 900;margin: 40px 0px 20px 0px;">{{topic.title}}</h1>
        </div>
        <!-- 帖子发布信息 -->
        <div style="height:40px;">
          <!-- 图片 -->
          <img style="margin 0px;width: 30px;border-radius: 4px;float: left;" src="../../static/head/cmaple.jpg">
          <!-- 名称 -->
          <div style="height: 34px;font-size: 18px;font-weight: 900;color: #909399;margin: 0px 0px 0px 0px;float: left; margin: 0px 0px 0px 20px;;line-height:34px;">{{topic.user}}</div>
           <!-- 时间 -->
          <div style="height: 34px;font-size: 12px;font-weight: 700;color: #C0C4CC;margin: 0px 0px 0px 0px;float: right;margin: 0px 0px 0px 10px;line-height:34px;">{{topic.time}}</div>
          <!-- 评论数量 -->
          <div style="height: 34px;font-size: 12px;font-weight: 700;color: #C0C4CC;margin: 0px 0px 0px 0px;float: right;margin: 0px 0px 0px 10px;line-height:34px;">回答：{{topic.reply}}次 ·</div>
          <!-- 预览数量 -->
          <div style="height: 34px;font-size: 12px;font-weight: 700;color: #C0C4CC;margin: 0px 0px 0px 0px;float: right;margin: 0px 0px 0px 10px;line-height:34px;">浏览：{{topic.preview}}次 ·</div>
          <!-- 关注数 -->
          <div style="height: 34px;font-size: 12px;font-weight: 700;color: #C0C4CC;margin: 0px 0px 0px 0px;float: right;margin: 0px 0px 0px 10px;line-height:34px;">关注：{{topic.follow}}次 ·</div>
        </div>
        <!-- 帖子内容 -->
        <div>
          <div style="margin: 40px 0px 40px 0px;" v-html="topic.content"></div>
        </div>
        <!-- 按钮组 -->
        <div style="height: 80px;">
          <!-- 关注话题 -->
          <button id="follow_button" type="submit" class="follow_button" style="float: left;width:80px;height:40px;margin-left:0px;" @click="follow()">关注</button>
          <!-- 写答案 -->
          <button id="reply_button" type="submit" class="reply_button" style="float: left;width:160px;height:40px;" @click="reply()">写回答</button>
          <!-- 举报内容 -->
          <a class="accusation_a" style="color: #F56C6C;" @click="accusation()" href="javascript:void(0)">举报内容</a>
        </div>
      </div>
    </div>
    <!-- 帖子评论 -->
    <div style="width:100%;height:auto;background-color:#F0F0F0;padding: 0px 0px 30px 0px">
      <!-- 宽度限制 -->
      <div style="width:800px;margin: 0 auto 0;margin-top:10px;">
        <div v-for="(comment, i) in comments" style="width:100%;height:auto;background-color:#FFFFFF;overflow: hidden;padding: 0px 0px 20px 0px;">
          <!-- 头像 -->
          <div style="width:50px;height:50px;margin: 20px 0px 0px 10px;float:left;">
            <img :src="comment.img" style="width:40px;height:40px;padding:5px;border-radius: 8px;">
          </div>
          <!-- 用户名 -->
          <div style=" width:300px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;font-size: 16px;font-weight:600;color: #909399;float:left;margin: 20px 0px 0px 20px;">
            {{comment.name}}
          </div>
          <!-- 答复 -->
          <div style=" width:700px;height:auto;padding: 0px;text-align: left;font-size: 13px;font-weight:400;color: #000000;float:right;margin: 25px 20px 10px 20px;">
            {{comment.msg}}
          </div>
          <!-- 按钮组 -->
          <div style="width: 800px;height: auto;float:right;margin: 0px 0px 10px 0px;">
            <!-- 时间 -->
            <b class="comment_a_time" style="margin: 5px 0px 0px 80px;">{{comment.time}}</b>
            <!-- 点赞 -->
            <div class="comment_a" style="margin: 5px 0px 0px 30px;">
              <a class="comment_a" @click="dianzan()" href="javascript:void(0)">
                <img style="width:17px;" src="../../static/dianzan.png">
                <font style="float:right;margin: 0px 5px 0px 5px;">{{comment.dianz}}</font>
              </a>
            </div>
            <!-- 踩 -->
            <div class="comment_a" style="margin: 5px 0px 0px 30px;">
              <a class="comment_a" @click="cai()" href="javascript:void(0)">
                <img style="width:17px;" src="../../static/dianzan.png">
                <font style="float:right;margin: 0px 5px 0px 5px;">{{comment.cai}}</font>
              </a>
            </div>
            <!-- 回复 -->
            <a class="comment_a" style="margin: 5px 0px 0px 50px;" @click="reply()" href="javascript:void(0)">回复</a>
          </div>
          <!-- 次级回复 -->
          <div v-for="r in comment.reply" style="width: 600px;height: auto;float:right;margin: 0px 0px 10px 0px;">
            <!-- 头像 -->
            <div style="width:25px;height:25px;margin: 0px 0px 0px 10px;float:left;">
              <img :src="r.img" style="width:25px;height:25px;padding:5px;border-radius: 8px;">
            </div>
            <!-- 用户名 -->
            <div style=" width:180px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;font-size: 12px;font-weight:600;color: #909399;float:left;margin: 0px 0px 0px 20px;">
              {{r.name}}
            </div>
            <div v-show="null != r.toid" style=" width:40px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;font-size: 12px;font-weight:400;color: #000000;float:left;margin: 0px 0px 0px 10px;">
              回复
            </div>
            <div v-show="null != r.toimg" style="width:25px;height:25px;margin: 0px 0px 0px 10px;float:left;">
              <img :src="r.toimg" style="width:25px;height:25px;padding:5px;border-radius: 8px;">
            </div>
            <!-- 用户名 -->
            <div v-show="null != r.toname" style=" width:180px;height:30px;padding: 0px;line-height: 30px!important;text-align: left;font-size: 12px;font-weight:600;color: #909399;float:left;margin: 0px 0px 0px 20px;">
              {{r.toname}}
            </div>
            <!-- 答复 -->
            <div style=" width:515px;height:auto;padding: 0px;text-align: left;font-size: 13px;font-weight:400;color: #000000;float:right;margin: 5px 30px 5px 20px;">
              {{r.msg}}
            </div>
            <!-- 按钮组 -->
            <div style="width: 545px;height: auto;float:right;margin: 0px 0px 0px 0px;">
              <!-- 时间 -->
              <b class="comment_a_time" style="margin: 5px 0px 0px 0px;">{{r.time}}</b>
              <!-- 点赞 -->
              <div class="comment_a" style="margin: 5px 0px 0px 30px;">
                <a class="comment_a" @click="dianzan()" href="javascript:void(0)">
                  <img style="width:17px;" src="../../static/dianzan.png">
                  <font style="float:right;margin: 0px 5px 0px 5px;">{{r.dianz}}</font>
                </a>
              </div>
              <!-- 踩 -->
              <div class="comment_a" style="margin: 5px 0px 0px 30px;">
                <a class="comment_a" @click="cai()" href="javascript:void(0)">
                  <img style="width:17px;" src="../../static/dianzan.png">
                  <font style="float:right;margin: 0px 5px 0px 5px;">{{r.cai}}</font>
                </a>
              </div>
              <!-- 回复 -->
              <a class="comment_a" style="margin: 5px 0px 0px 50px;" @click="reply()" href="javascript:void(0)">回复</a>
            </div>
          </div>
          <!-- 分割线 -->
          <div v-show="0 != i" class="divider div-transparent"></div>
        </div>
      </div>
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
      // 文章信息
      topic:{
        // 标题
        title:'如何防止 Java 源码被反编译？？我：有点懵~',
        // 用户信息
        user:'黑山老幺的好的哈',
        // 关注数量
        follow:'100',
        // 浏览数量
        preview:'7845',
        // 回答
        reply: '201',
        // 时间
        time:'2021-09-14 14:16:50',
        // 内容
        content:'',
      },
      // 评论信息
      comments:[
        {
          // id号
          id:'10003221',
          // 头像
          img:'../../static/head/cmaple.jpg',
          // 名称
          name:'测试用户名称测试用户名称',
          // 时间
          time:'2021-09-15 16:10:21',
          // 点赞
          dianz:21,
          // 踩
          cai: 0,
          // 内容
          msg:'就营养价值而言二者三斤八两。咖啡的价格高于豆浆，主要由加工生产过程（生产力）的差异决定。若出现价格虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。',
          // 内置评论
          reply:[
            {
                id:'10003221',
                img:'../../static/head/cmaple.jpg',
                name:'测试用户名称测试用户名称1',
                toid: null,
                toimg: null,
                toname: null,
                // 时间
                time:'2021-09-15 16:10:21',
                // 点赞
                dianz:21,
                // 踩
                cai: 0,
                // 内容
                msg:'就营养价值而言二者三斤八两。咖啡的价格高于豆浆，主要由加工生产过程（生产力）的差异决定。若出现价格虚高现象多半',
            },
            {
                id:'10003221',
                img:'../../static/head/yuanshen.jpg',
                name:'测试用户名称测试用户名称2',
                toid: '10003221',
                toimg: '../../static/head/cmaple.jpg',
                toname: '测试用户名称测试用户名称1',
                // 时间
                time:'2021-09-15 16:10:21',
                // 点赞
                dianz:21,
                // 踩
                cai: 0,
                // 内容
                msg:'就营养价值而言二者三斤八两。咖啡的价格高于豆浆，主要由加工生产过程（生产力）的差异决定。若出现价格虚高现象多半',
            },
          ]
        },
        {
          // id号
          id:'10003221',
          // 头像
          img:'../../static/head/cmaple.jpg',
          // 名称
          name:'测试用户名称测试用户名称测试用户名称',
          // 时间
          time:'2021-09-15 16:10:21',
           // 点赞
          dianz:21,
          // 踩
          cai: 0,
          // 内容
          msg:'就营养价值而言二者三斤八两。咖啡的价格高于豆浆，主要由加工生产过程（生产力）的差异决定。若出现价格虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。虚高现象多半是加入了客观质量提升与高等物质消费的满足感，资本也可运作以操控价格。故，不对。',
          // 内置评论
          reply:[

          ],
        },
      ],
       // 未读消息数量
      noread:99,
      // 用户弹窗显示标记
      isuserinfo: false,
      // 消息弹窗显示标记
      isxiaoxi: false,
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
    // 获取帖子详细信息
    selectArticleById(){
      //设置必要参数
      var that = this;
      //获取团队管理信息
        this.$Axios.post(this.$Config.Back_End_Service+this.$Config.selectArticleById,
        this.$qs.stringify({
          uip: localStorage.getItem("cip"),
          lastplace: localStorage.getItem("cname"),
          id: this.$route.query.id,
        }))
      .then(function(res){
        if (res.data.RTCODE == 'success') {
         that.topic.title = res.data.RTDATA.title;
         that.topic.user = res.data.RTDATA.author;
         that.topic.follow = res.data.RTDATA.id;
         that.topic.preview = res.data.RTDATA.id;
         that.topic.reply = res.data.RTDATA.id;
         that.topic.time = res.data.RTDATA.createtime;
         that.topic.content = res.data.RTDATA.content;
        }else{
          //异常结果显示
          that.$Config.alertMessage(that, "获取帖子信息失败！", res.data.RTMSG, "error");
        }
      })
      .catch(function(err){
        that.$Config.alertMessage(that, "获取获取帖子信息函数异常！", err+'', "error");
      });
    },


  },
  created() {
    this.selectArticleById();
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
    font-weight:400;
  }
  /* 发布按钮 */
  .follow_button{
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
    margin: 10px 0px 10px 10px;
  }
  .follow_button:hover{
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
    margin: 10px 0px 10px 10px;
  }
  /* 写回答 */
  .reply_button{
    border-radius:5px;
    background-color:#FFFFFF;
    color:#303133;
    font-size: 1.0rem;
    font-weight: 400;
    line-height: 1;
    border: 1px solid #303133;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  .reply_button:hover{
     border-radius:5px;
    background-color:#C0C4CC;
    color:#303133;
    font-size: 1.0rem;
    font-weight: 400;
    line-height: 1;
    border: 1px solid #303133;
    outline: none;
    cursor: pointer;
    transition: .5s;
    margin: 10px 0px 10px 10px;
  }
  /* 举报内容 */
  .accusation_a{
    font-size: 13.5px;
    font-weight: 600;
    color: #8590a6;
    text-decoration:none;
    float: right;
    margin: 30px 0px 0px 0px;
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
/* 评论按钮 */
.comment_a{
  font-size: 13.5px;
  font-weight: 600;
  color: #C0C4CC;
  text-decoration:none;
  float: left;
}
.comment_a:hover{
  font-size: 13.5px;
  font-weight: 600;
  color: #409EFF;
  text-decoration:none;
  float: left;
}
/* 评论时间 */
.comment_a_time{
  font-size: 13.5px;
  font-weight: 600;
  color: #C0C4CC;
  text-decoration:none;
  float: left;
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
</style>
