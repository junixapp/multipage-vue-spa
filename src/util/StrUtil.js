'use strict'

function toString(s) {
  if(typeof s === "number"){
    s += ""
  }
  return s
}

//验证是否是正确的手机号
function verifyPhone(phone) {
  phone = toString(phone)
  let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  return phoneReg.test(phone)
}

//验证是否是正确的密码，规则：6-20位字母和数字的组合
function verifyPassword(psw) {
  psw = toString(psw)
  let pswReg = /^[a-zA-Z0-9]{6,20}$/
  return pswReg.test(psw)
}

//验证短信验证码, 规则：4个数字
function verifySmscode(smscode) {
  smscode = toString(smscode)
  let smsCodeReg = /^[0-9]{4}$/
  return smsCodeReg.test(smscode)
}

//验证昵称是否正确，规则：2-20个字符非空白字符
function verifyNickname(nickname) {
  nickname = toString(nickname)
  let nicknameReg = /^[\S]{2,20}$/
  return nicknameReg.test(nickname)
}

//从http://pv.sohu.com/cityjson返回的结果中解析中ip
//结果： var returnCitySN = {"cip": "116.30.30.234", "cid": "440300", "cname": "广东省深圳市"};

module.exports = {
  verifyPhone,
  verifyPassword,
  verifySmscode,
  verifyNickname
}
