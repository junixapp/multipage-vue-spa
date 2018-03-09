/**
 * 注册，登录，验证相关
 */


import axios from './axios_config'

//登录
function login() {
  let data = {}
  axios.post("/login", data)
    .then((response) => {
      callback(response.data);

    });
}


//注册
function register(username, password, phoneNumber, msgCode, cb) {
  axios.post("/register", {
    username, password, phoneNumber, msgCode
  }).then((response) => {
    cb(response.data);
  });
}



export default {
  login, register
}
