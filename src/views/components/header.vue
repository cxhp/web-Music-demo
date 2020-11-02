<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        首页
      </el-menu-item> 
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        分类
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-price-tag"></i>
        标签
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        更多
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name:'NavHeader',
  data(){
    return{
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch(key){
        case "1":
          console.log(1111)
          this.$router.push('/');
        break;
        case "2":
          console.log(2222)
          this.$router.push('/about');
        break;
      }

       
    },
  }
  
}
</script>
<style scoped>


</style>
