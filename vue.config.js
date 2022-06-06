const { defineConfig } = require('@vue/cli-service')
const path =require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname,'./src/assets/styles/variables.less')
      ]
    }
  },
  devServer: {
    // 配置跨域
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        // 地址重写
        pathRewrite: {
          ["^"+process.env.VUE_APP_BASE_API]:""
        }
      }
    }
  }
})
