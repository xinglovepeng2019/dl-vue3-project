// 实现使用函数调用 xtx-message组件

import { createVNode, render } from "vue";
import xtxMessage from './xtx-message.vue'

// 准备dom容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)

let timer =null

export default ({ text, type }) => {
  // 根据xtx-message.vue渲染消息提示
  // 导入组件
  // 根据组件创建虚拟节点
  const vnode = createVNode(xtxMessage, { type, text })
  // 把虚拟节点渲染到dom容器中
  render(vnode, div)
  
  // 开启定时器
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null,div)
  },2000)
  
}