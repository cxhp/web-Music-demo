<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../img/3.jpg"/>
      </div>
      <ul v-for="(ite,index) in listData" :key="index">
        <li>
          <router-link :to="ite.path">
            {{ite.tit}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'NavHeader',
  data(){
    return{
      activeIndex: "1",
      listData: [
        { tit: '首页精选',path: '/'},
        { tit: '我的音乐',path: '/about'},
        { tit: '排行榜',path: '/'},
        { tit: '歌手',path: '/about'},
        { tit: '上新',path: '/'},
        { tit: '关于',path: '/about'},
      ]
    }
  },
  methods: {
   
  }
}
</script>
<style scoped>
.header{
  margin: 0 auto;
  width: 100%;
  height: 70px;
  background: #242424;
  color: #ffffff;
}
.container{
  height: 70px;
  overflow: hidden;
}
.container:after{
  display: block;
  content: '';
  height: 0; /**伪元素不影响页面布局 */
  clear: both;
  /* text-align: center; */
}
.logo{
  float: left;
}
.logo img{
  width: 111px;
  height: 70px;
}
.container ul{
  float: left;
  margin-left: 30px;
}

.container li{
  margin: 0 20px;
  font-size: 18px;
  display: inline;
  line-height: 70px;
}
.container li a{
  color: #FFF;
} 
</style>
