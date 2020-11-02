<template>
  <div class="home">
  
   <div class="container">
     <!-- 轮播图 -->
    
    <template>
      <el-carousel :interval="4000" type="card" >
        <el-carousel-item v-for="(item,index) in RotationList" :key="index">
          <h3 class="medium">{{ item.url }}</h3>
          <img :src="  item.url ">
        </el-carousel-item>
      </el-carousel>
    </template>

    <!-- 分区v   图标+文字 用flex-->
    <div class="content-container">
      <div class="category">
        <div class="category-item">
          <img src="@/views/img/1.png">
          <p> 文字 </p>
        </div>
        <div class="category-item">
          <img src="@/views/img/1.png">
          <p> 文字 </p>
        </div>
        <div class="category-item">
          <img src="@/views/img/1.png">
          <p> 文字 </p>
        </div>
      </div>

      <!-- 热门推荐   同一结构的重复-->
      <div class="recommend">
        <div class="recommend-header">
          <span>热门推荐</span>
          <a>更多</a>
         
        </div>
         <hr/>
        <ul>
          <li>
            <!-- 图片 -->
            <div class="recommend-item">
              <div class="item-img">
                这是图片位
              </div>
              <!-- 播放次数 -->
              <div class="item-play"> 
                <span class="el-icon-video-play"></span>
                <span> 42万</span>
                <a href="#" class="el-icon-video-play"></a>
              </div>
            </div> 
            <p>
              <a href="#"> 第三十八年夏至</a>
            </p>
          </li>
           <li>
            <!-- 图片 -->
            <div class="recommend-item">
              <div class="item-img">
                这是图片位
              </div>
              <!-- 播放次数 -->
              <div class="item-play"> 
                <span class="el-icon-video-play"></span>
                <span> 42万</span>
                <a href="#" class="el-icon-video-play"></a>
              </div>
            </div> 
            <p>
              <a href="#"> 第三十八年夏至</a>
            </p>
          </li>
        </ul>
      
      </div>
    </div>


    <!-- 音乐榜单 -->



   </div>
   
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['home'], 
  data(){
    return {
      RotationList:[
        {
          id:'1',
          url: '@/views/img/1.png'
        },
        {
          id:'2',
          url: '@/views/img/2.png'
        },
        {
          id:'3',
          url: '@/views/img/3.png'
        }
      ]
      
    }
  }

}
</script>
<style scoped>
.home{
  background: pink;
}
/* 轮播图 */
.el-carousel__container{
    width: 300px;
  }

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .content-container{
    padding: 20px 20px 40px;
  }
  .category{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: flex-start;
  }
  .category-item{
    width:80px;
    margin: 0 20px;
  }
  .category-item:first-child{
    margin-left: 0;
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
    width: 140px;
  }
  .recommend-item{
    position: relative;
    background-position: 0 -537px;
    color: #ccc;
  }

  .recommend .item-img{
    border: 1px solid red;
    width: 140px;
    height: 140px;
  }
  .recommend .item-play{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background:grey;
    opacity: 0.5;
  }
  .item-play a{
    position: absolute;
    right: 10px;
    line-height: 22px;

  }
  .item-play .el-icon-video-play {
    margin-left: 8px;
    color: #ccc; 
  }

  .recommend-header {
    width: 100%;
    position: relative;
  }
  .recommend-header a{
    position: absolute;
    right: 0;
  }
  .recommend li>p {
    margin: 8px 0 3px;
  }
  .recommend ul {
    display: flex;
  }
  .recommend ul li:not(:first-child){
    margin-left: 20px;
  }

</style>
