import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        // 一个存储数据仓库
        app
    },
    // 数据的引入    对状态的提供者
    getters
})

export default store