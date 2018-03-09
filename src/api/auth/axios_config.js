'use strict'
/**
 * axios全局配置，拦截器设置，统一错误处理
 */
import Axios from 'axios'
import qs from 'querystring'


let axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/account' : "/",
  transformRequest: [function (data) {
    //参数转为url参数形式
    data = qs.stringify(data);
    return data;
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

//请求拦截器
axios.interceptors.request.use(config => {
  // element ui Loading方法
  // loadinginstace = Loading.service({fullscreen: true})
  return config
}, error => {
  return Promise.reject(error)
})

//axios统一处理请求fail的情况
axios.interceptors.response.use(function (response) {
  //do something when success.
  console.log(response.data);
  return response;
}, function (err) {
  console.log(err.response)
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误(400)';
        break;
      case 408:
        err.message = '请求超时(408)';
        break;
      case 500:
        err.message = '服务器错误(500)';
        break;
      default:
        err.message = `连接出错(${err.response.status})!`;
    }
  } else {
    err.message = '连接服务器失败!'
  }
  //全局提示错误信息
  return Promise.reject(err);
});

export default axios;
