import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Login =()=>import('@/views/Login')

// 路由规则
const routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/login',
    component: Login,
   }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前的时一样的
  routes
})

export default router
