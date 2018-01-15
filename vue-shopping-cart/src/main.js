// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import { currency } from './currency'

Vue.config.productionTip = false

// 全局引入 currency 对数据进行过滤：浮点数的精度确定、汇率的计算等等
Vue.filter('currency', currency)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
