import axios from 'axios'

// 导出基地址， 其它地方不是通过axios发请求的地方用上基地址
export const baseURL = 'http://2105b.9yuecloud.com/pro-api'
const instance = axios.create({
  baseURL,
  timeout:5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 封装请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    [method.toLowerCase()==='get'?'params':'data']:submitData
   /* 
     1如果是get请求 使用params来传递submitData  ?a=10&b=23
     如果不是get请求  需要使用data来传递submitData 请求体传递
     []设置一个动态的key ，写js表达式，js表达式执行结果就是key

     ['params]:submitData=====params.submitData
     
   */
  })
}