import shop from '../../api/shop'
// 集中所有状态的改变   形成一个改变的清单
import * as types from '../mutation-types'
const state = {
    // 放置着所有的状态  目前还只是空的   数据可以向仓库提出请求进行取数据
    all: []
}

const getters = {
    // 向外暴露数据的  只读属性
    allProducts: state => state.all
}

const mutations = {
    // key 是常量  用[]
    [types.RECEIVE_PRODUCTS] (state, { products }) {
        state.all = products
    },
    // mutation 对数据的改变  将商品数量进行减一
    [types.ADD_TO_CART] (state, {id}) {
        state.all.find(product => product.id === id).inventory--
    }
}

const actions = {
    // 函数会接收一个默认参数commit
    // 去取数据  交给mutations
    getAllProducts ({ commit }) {
        shop.getProducts(products => {
            // console.log(products)
            // { products } 花括号？？？     {commit} ???
            commit(types.RECEIVE_PRODUCTS, { products })
        })
    }
}
export default {
    // 数据的核心  状态   提供数据   状态驱动界面   通过actions获取的（固定的）
    state,
    // 提供修改数据的方式（固定的）
    mutations,
    // 负责所有API之间的通讯   还要进行数据的获取
    actions,
    // 获得数据（固定的）
    getters
}