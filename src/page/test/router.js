'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import log from '@/util/log'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: '',
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import(/* webpackChunkName: "CBLoginWrapper" */ "@/components/test/CBTest"),
      meta: {
        pageTitle: '测试'
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
