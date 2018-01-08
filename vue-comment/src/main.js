// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入饿了么开发的框架组件
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

// 将elementUI注入到所有的vue中
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
