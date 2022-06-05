<template>
  <div class="logincontainer">
    <div class="con">
      <h2>星空管理系统</h2>
      <login-form></login-form>
    </div>
  </div>
</template>
<script>
import loginForm from './components/loginForm.vue'
export default {
  name: 'xk-login',
  components: {
    loginForm,
  },
}
</script>
<style lang="less" scoped>
.logincontainer {
  background-color: @xtxColor;
  height: 100%;
  .con {
    width: 400px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    h2 {
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
