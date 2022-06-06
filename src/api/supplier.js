import request from '@/utils/request'


/* 
 账号登陆
 usename用户名
 password密码

*/
export const getSupplier = ({ currentPage, pageSize }) => {
  return request(`supplier/list/search/${currentPage}/${pageSize}`,'post',{})
}