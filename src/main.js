import Vue from 'vue'
import App from './App.vue'

//引入路由器
import router from './router'

/* eslint-disable no-new */
new Vue({		//配置对象的属性名都是一些固定的属性名，不可以随意修改
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
