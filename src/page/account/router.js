'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import log from '@/util/log'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'account',
      component: () => import(/* webpackChunkName: "CBLoginWrapper" */ "@/components/auth/CBLoginWrapper"),
      meta: {
        pageTitle: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "CBLoginWrapper" */ "@/components/auth/CBLoginWrapper"),
      meta: {
        pageTitle: '登录'
      }
    },
    {
      path: '/reset_psw',
      name: 'reset_psw',
      component: () => import(/* webpackChunkName: "CBResetPsw" */ "@/components/auth/CBResetPsw"),
      meta: {
        pageTitle: '重置密码'
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  //set html title
  if (to.meta.pageTitle) {
    document.title = to.meta.pageTitle
  }

  //处理一些访问规则
  log(`router beforeEach from: ${from.name}  to: ${to.name}`);
  if(to.name==="login"){
    if(store.state.user){
      let target = from || {name: "index"}
      next(target)
      return
    }
  }

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
  next()
})

export default router
