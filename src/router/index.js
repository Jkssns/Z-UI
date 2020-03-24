import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: () => import('@/views/home')
    },
    {
      path: '/button',
      component: () => import('@/components/button/src/button')
    },
    {
      path: '/input',
      component: () => import('@/components/input/src/input')
    },
    {
      path: '/select',
      component: () => import('@/components/select/src/select')
    },
    {
      path: '/dialog',
      component: () => import('@/components/dialog/src/dialog')
    },
  ]
})
