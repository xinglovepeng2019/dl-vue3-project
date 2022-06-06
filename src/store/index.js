import { createStore } from 'vuex'

import createPersistedstate from 'vuex-persistedstate'



import user from './modules/user'
import category from './modules/category'




// 创建vuex仓库并导出
export default createStore({
  modules: {
    user,
    category
  },
  plugins: [
    // 默认存储到localStorage中
    // key是存储数据的键名
    // paths 是存储state中的哪些数据 如果是模块下具体的数据需要加上模块名称 比如user.token
    createPersistedstate({
      key: "xkadmin-store",
      paths:['user']  //你要进行本地存储的模块
    })
  ]
})
