<template>
  <div class="home">
   <div class="container">
     <!-- 轮播图 -->
    <div class="rotation">
      <template>
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="(item,index) in RotationList" :key="index">
            <img :src="item.url">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

   
    <div class="content-container">
      <!-- 分区-->
      <div>
         <div class="recommend-header">
          <span>热门分类</span>
          <a href="#">更多</a>
        </div>
      
        <div class="category" >
          <div class="category-item" v-for="(item,id) in categoryList" :key="id">
            <img src="@/views/img/1.png">
            <p> {{item.name}} </p>
          </div>
        </div>
      </div>
      <!-- 热门推荐   同一结构的重复-->
      <div class="recommend">
        <div class="recommend-header">
          <span>热门推荐</span>
          <a href="#">更多</a>
        </div>
        <ul>
          <li v-for="(item,index) in hotRcommonedList" :key="index">
            <!-- 图片 -->
            <div class="recommend-item">
               <img :src='item.picUrl' class="item-img"/>
              <!-- 播放次数 -->
              <div class="item-play icon"> 
                <span class="el-icon-service"></span>
                <span> {{item.playCount}}</span>
                <a href="#" class="el-icon-video-play"></a>
              </div>
            </div> 
            <p>
              <a href="#"> {{item.name}}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>


    <!-- 音乐榜单 -->
    <div class="top">
      <div class="recommend-header">
        <span>榜单</span>
        <a href="#">更多</a>
      </div>

<!-- 循环，这一段 -->
      <div class="top-container">
          <dl class="blk" v-for="(item,index) in dataList" :key="index">
            <dt class="top1">
              <div class="cover">
                <a><img :src="item.coverImgUrl" alt=""></a>
              </div>
              <div class="tit">
                <a href="#"> {{item.name}}</a>
              </div>
            </dt>
            <dd >
              <ol v-for="(i ,indx) in item.tracks" :key="indx">
                <li>
                  <a href="#">
                    <span>{{i.first}}</span> 
                  </a>
                  <div class="collect icon">
                    <i class="el-icon-video-play">
                      <!-- <a href="#"></a> -->
                    </i>
                  </div>
                </li>
              </ol>
            </dd>
          </dl>
      </div>
      

    </div>

   </div>
   
  </div>
</template>

<script>
import * as articleAPI from '@/api/article'
export default {
  name: 'Home',
  props: ['home'], 
  data(){
    return {
      hotRcommonedList: [],
      // 轮播图
      RotationList:[
         {
          id:'1',
          url: require('@/views/img/lb1.jpg')
        },
         {
          id:'1',
          url: require('@/views/img/lb2.jpg')
        },
        {
          id:'3',
          url: require('@/views/img/1.png')
        },
        {
          id:'4',
          url: require('@/views/img/2.png')
        },
      ],
      // 热门分类
      categoryList:[],
      // 榜单
      dataList: []
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      this.getHotRecommend();
      this.getHotSongClass();
      this.getListTOP3();

    },
     getHotRecommend(){
      const limit = 8
      articleAPI.hotSongRecommend(limit).then(res =>{
        res.result.forEach(v => {
           v.playCount = this.dealNumData(v.playCount)
        });
        this.hotRcommonedList = res.result
      })
    },

    // 数据处理。数据>亿，以亿为单位，>万，以万为单位，否则，直接展示
    dealNumData(data){
      let num = data.toString().length
      return data = num > 9 ? 
      Math.floor(data / 100000000) + '亿' : 
      (num > 5? Math.floor(data / 10000) + '万' : data)
    },  
    
    // 分类
    getHotSongClass(){
      articleAPI.hotSongClass().then(res=>{
        this.categoryList = res.tags
      })
    },

    //  榜单
    getListTOP3(){
      articleAPI.listTOP3().then(res=>{
        this.dataList=res.list.slice(0,3)
      })
    }

  }
}
</script>
<style scoped>
.home{
  width: 800px;
  margin: 0 auto;
  border: 2px solid #f5f5f5;
  box-shadow: 2px 10px 10px #aaaaaa;
  padding: 0 40px;
}

/* 轮播图 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__container img{
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* -------------- */
  .category{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    background: #f5f5f5;
    border: 1px solid #CCC;

  }
  .category-item{
    width:80px;
    margin: 20px 38px;
  }

  .category-item p{
    text-align: center;
  }

  .category-item img{
    width: 100%;
    height: 80px;
    border-radius: 50%;
  }
  .recommend{
    margin-top: 20px;
  }
  .recommend ul li{
    width: 150px;
    height: 240px;
    margin-left: 66px;
    float: left;
  }
  .recommend-item{
    position: relative;
    color: #ccc;
  }

  .recommend .item-img{
    width: 150px;
    height: 160px;
  }
  .recommend .item-play{
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    background:rgb(77, 74, 74);
    opacity: 0.8;
    height: 27px;
  }
  .item-play a,.item-play span{
    line-height: 27px;
  }

  .item-play .el-icon-service{
    margin-left: 10px;
  }
  .item-play a{ 
    position: absolute;
    right: 10px;
    margin-left: 8px;
    color: #ccc; 
     font-size: 20px;
  }
  .item-play a:hover{ 
    color: red;
    color: white;;
  }

  .recommend-header {
    width: 100%;
    position: relative;
    padding: 30px 0 10px;
    border-bottom: 2px solid #C10D0C;
    margin-bottom: 20px;
  }

  .recommend-header>a,.recommend-header>span{
    font-size: 20px;
    font-weight: 400;
  }
  .recommend-header a{
    position: absolute;
    right: 0;
  }
  .recommend li>p {
    margin: 8px 0 3px;
  }
  .recommend ul {
    /* display: flex; */
    margin: 10px 0 0 -66px;
    overflow: hidden;
  }
  .recommend ul li:not(:first-child){
    /* margin-left: 20px; */
  }


  @media (max-width:800px ){
    .rotation{
     padding: 0 ;
    }
  }

.top-container{
  border: 1px solid rgb(157, 152, 152);
  margin-bottom: 30px;
  overflow: hidden;
}

.blk{
  width: 265px;
  margin:0;
  border-right: 1px solid rgb(157, 152, 152);
  float: left;
  
}
.blk:last-child{
  border:none;
}
.blk dd{
  margin-left: 0;
}
.blk li{
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border-top: 1px solid #99a9bf;
}
.blk li:hover .collect{
  display: block;
}
/* 奇数行   */
.blk li:nth-of-type(odd){
  background: #f5f5f5;

} 
/* 偶数行  */
.blk li:nth-of-type(even){
background: #d3dce6;
} 
.blk .collect{
  color: #475669;
  width: 80px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  display: none;
}
.top1{
  height: 100px;
  padding: 20px 0 0 23px;
  background: #f5f5f5;
}
.cover img{
 width: 93px;
 height: 80px;
}
.tit{
float: left;
margin-left: 15px;
line-height: 80px;
}
.cover{
  float: left;
}
/* .top-container li i:hover{
  color: green;
  visibility: hidden;;
} */
/* .top-container a:hover{
  text-decoration: underline;
  color: red;
} */
a:hover{
  text-decoration: underline;
  color: red;
}
.item-play a:hover{
  text-decoration: none;
  color: #ccc;
}
</style>
