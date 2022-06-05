<template>
  <div class="common-layout">
    <el-container>
      <el-header>星空管理系统</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <!-- <xtx-message :type="success" text="成功"></xtx-message> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import xtxMessage from '@/components/library/xtx-message.vue'
export default {
  components: { xtxMessage },
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
      background-color: #d3dce6;
      color: #333;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
    }
  }
}
</style>
