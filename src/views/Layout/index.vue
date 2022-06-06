<template>
  <div class="common-layout">
    <el-container>
      <el-header>星空管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <aside-item></aside-item>
        </el-aside>
        <el-main>
          <!-- <xtx-message :type="success" text="成功"></xtx-message> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AsideItem from './components/asideItem.vue'
export default {
  components: { AsideItem },
  name: 'xk-layout',
}
</script>
<style lang="less" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
    }

    .el-aside {
      background-color: #222832;
      color: #333;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
    }
  }
}
</style>
