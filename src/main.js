import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import newRouter from './router/index'
import zjui from './index.js'

Vue.use(vueRouter)
Vue.use(zjui)
const router = new vueRouter(newRouter);   // 定义vueRouter实例
new Vue({
router,   //not Router,  需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
render: (h)=>h(App) 
}).$mount('#app')


