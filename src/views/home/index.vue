<template>
 <!-- 放置一个大容器 -->
   <el-container>
    <!-- 左右布局 -->
    <el-aside style="height:100vh;background-color:#353b4e;width:230px;">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>
       <!-- 二级路由容器 -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader
  // }
}
</script>

<style lang='less' scoped>
.layout-header {
    height:60px;
    .left {
        font-size: 20px;
        span {
           color: #2c3e50;
           font-size: 16px;
           margin-left:4px;
        }
    }
    .right {
      img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
      }
    }
}
</style>
