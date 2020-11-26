<template>
  <div class="hello">
    <div id="homepage_font" :style="{height:pageheight+'px'}">
      
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  //name: 'HelloWorld',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
    getPageHeight(){
      this.pageheight = window.innerHeight;
    }
  },
  created(){
    //页面地址列表
    // this.HomePageUrl="/"
    // this.AboutHZPageUrl="/about_HZ"
    // this.AboutWHPageUrl="/about_WH"
    // this.AboutPageUrl="/about"
  },
  destroyed(){
  },
  mounted(){
    window.onresize = () =>{
      return(()=>{
        this.getPageHeight()
      }
        )()
      }
        this.getPageHeight()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #homepage_font{
    width: 100%;
    background-color: #E6A23C;
  }
  
</style>
