import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
// import time from 'to-time-string'

import { 
  Button,
  Input,
  Select,
  Dialog,
 } from '@/index'

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Dialog)


const vue = new Vue({
router,   //not Router,  需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
render: (h)=>h(App) 
}).$mount('#app')

export default vue


