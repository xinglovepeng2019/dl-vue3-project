<template>
  <el-menu
    background-color="#222832"
    text-color="#fff"
    default-active="3"
    :router="true"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="/index">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/member">
      <el-icon><Avatar /></el-icon>
      <span>会员管理</span>
    </el-menu-item>
    <el-menu-item index="/supplier">
      <el-icon><Box /></el-icon>
      <span>供应商管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><GoodsFilled /></el-icon>
      <span>商品管理</span>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><HomeFilled /></el-icon>
      <span>员工管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
