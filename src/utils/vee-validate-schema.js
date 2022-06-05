// 定义校验规则  给vee-validate组件使用
export default {
  username (value) {
    if (!value) return '请输入账号'
    return true
  },
  password (value) {
    if (!value) return '请输入密码'
    if(!/^\w{5,24}/.test(value)) return '密码要5-24个字符'
    return true
  }
}