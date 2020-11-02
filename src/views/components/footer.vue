<template>
  <div class="footer">
    <ul>
      <li>
        <a href="#">QQ客服 </a>
      </li>
      <li>
        <a href="#">©1999-2020 </a>
      </li>
      <li>
        <a href="#">免责声明</a>
      </li>
      <li>
        <a href="#">版权申诉</a> 
      </li>
      <li> 
        <a href="#">联系我们</a>
      </li>
      
      
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NavFooter',
}
</script>

<style scoped>
  .footer{
    background-color: rgb(84, 92, 100);
  }
  ul{
    display: flex;
    flex-wrap: warp;
    justify-content: center;
  }
  li{
    margin:2px 3px;
    font-size: 12px;
    height: 30px;
    display: flex;
    align-items: center;
  }
  ul li{
    list-style: none;
    color: rgb(255, 255, 255);
  }
  ul li a{
    color: inherit;
    text-decoration: none;
  }
</style>
