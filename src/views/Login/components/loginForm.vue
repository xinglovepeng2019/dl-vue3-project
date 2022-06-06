<template>
  <div class="form">
    <Form
      :validation-schema="scheam"
      ref="loginRef"
      autocomplete="off"
      v-slot="{ errors }"
    >
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <!-- <input type="text" placeholder="请输入账号" /> -->
          <Field
            :class="{ error: errors.username }"
            v-model="form.username"
            name="username"
            placeholder="请输入账号"
          />
        </div>
        <div class="error" v-if="errors.username">
          <i class="iconfont icon-warning" />{{ errors.username }}
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-lock"></i>
          <!-- <input type="password" placeholder="请输入密码" /> -->
          <Field
            :class="{ error: errors.password }"
            v-model="form.password"
            name="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="error" v-if="errors.password">
          <i class="iconfont icon-warning" />{{ errors.password }}
        </div>
      </div>
      <div class="form-item">
        <el-button type="primary" @click="loginFn">登录</el-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import useLogin from './login.js'
export default {
  components: {
    Field,
    Form,
  },
  setup() {
    // 登录
    const { form, scheam, loginRef, loginFn } = useLogin()

    return { form, scheam, loginRef, loginFn }
  },
}
</script>

<style lang="less" scoped>
.form {
  padding: 0 40px;
  margin-top: 15px;
  &-item {
    margin-bottom: 28px;
    .input {
      position: relative;
      height: 36px;
      > i {
        width: 34px;
        height: 34px;
        background: #cfcdcd;
        color: #fff;
        position: absolute;
        left: 1px;
        top: 1px;
        text-align: center;
        line-height: 34px;
        font-size: 18px;
      }
      input {
        padding-left: 44px;
        border: 1px solid #cfcdcd;
        height: 36px;
        line-height: 36px;
        width: 100%;
      }
    }
    .error {
      color: @priceColor;
    }
  }
}
</style>
