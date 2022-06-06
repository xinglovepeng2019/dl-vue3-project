import request from '@/utils/request'


/* 
 账号登陆
 usename用户名
 password密码

*/
export const userNameLogin = ({ username, password }) => {
  return request('/admin/login','post',{ username, password })
}