import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/comm.less'
// 导入自己的UI组件
import UI from '@/components/library'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建vue实例
const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).use(UI).mount('#app')
