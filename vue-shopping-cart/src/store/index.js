import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products
    },
    // 定义一个全局的actions   能激发到每个模块都有mutations
    actions
})