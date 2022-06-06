import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

const Layout = () => import('@/views/Layout')
const Login =()=>import('@/views/Login')

// 路由规则
const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'index',
        component:()=>import('@/views/Index')
      },
      {
        path: 'supplier',
        component:()=>import('@/views/Supplier')
      },
      {
        path: 'member',
        component:()=>import('@/views/Member')
      }
    ]
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

router.beforeEach((to, from, next) => {
  const {userInfo} = store.state.user
  // console.log(userInfo)
  if (to.path == '/login') {
    // 路径是login 正常执行
    next()
  } else {
    // 判断是否有token
    // next()
    if (userInfo.token.length == 0) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
