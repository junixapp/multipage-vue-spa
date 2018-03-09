'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import log from '@/util/log'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'pay',
      component: () => import(/* webpackChunkName: "CBPay" */ "@/components/pay/CBPay"),
      meta: {
        pageTitle: '支付'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import(/* webpackChunkName: "CBPay" */ "@/components/pay/CBPay"),
      meta: {
        pageTitle: '支付'
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
