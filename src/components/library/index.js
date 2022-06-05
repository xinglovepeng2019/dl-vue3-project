import Message  from "./Message"
export default {
  install (app) {
    // 挂载全局属性   组件实例中调用  this.$message
    app.config.globalProperties.$message=Message
  }
}