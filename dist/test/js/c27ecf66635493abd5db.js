webpackJsonp([0],{"jH+J":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"CBTest",data:function(){return{}},methods:{gotoAccount:function(){window.location="http://172.16.0.108:8080/account"},gotoPay:function(){window.location="http://172.16.0.108:8080/pay"}}},a={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.$store.state.user?o("div",{staticClass:"user"},[t._v("\n    当前用户："+t._s(t.$store.state.user.username)+"\n    "),o("button",{staticClass:"btn-fw",on:{click:t.gotoPay}},[t._v("去支付")])]):o("div",[o("button",{staticClass:"btn-fw",on:{click:t.gotoAccount}},[t._v("登录/注册")])])])},staticRenderFns:[]};var c=o("X4nt")(e,a,!1,function(t){o("qEEf")},"data-v-1a393cba",null);n.default=c.exports},qEEf:function(t,n){}});