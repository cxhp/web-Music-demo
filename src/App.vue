<template>
  <div id="app">
    <!-- 导航头 -->
    <div v-if="$route.meta.keepAlive">
      <keep-alive>
        <nav-header></nav-header>
      </keep-alive>
      <!-- 内容部分 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- 底部 --> 
      <nav-footer></nav-footer>
     </div>

     <!-- 登录页 -->
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import NavHeader from './views/components/header'
import NavFooter from './views/components/footer'

export default {
  name: 'Layout',
  components:{ 
    NavHeader,
    NavFooter,
  },
}
</script>
<style >


</style>
