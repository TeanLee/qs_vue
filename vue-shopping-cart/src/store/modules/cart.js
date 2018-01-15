import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
    // 给添加到购物车的商品取个名字
    added: [],
    checkoutStatus: null
}

const getters = {
    checkoutStatus: state => state.checkoutStatus,

    // 负责从state中取数据
    // rootState 参数会返回根节点的数据（文档）
    cartProducts: (state, getters, rootState) => {
        // return state.added
        // { id, quantity }  对每一个商品进行结构   每一项包括两个字段  id 和 quantity  这样下面就可以直接用
        // 在购物车中不存商品的价格、标题等等   因为数据可能改变   只在购物车保存id和数量就好了   要数据就去根节点取就好
        return state.added.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            // console.log(product)
            // 根据id 去根节点找出商品对应的标题  价格
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        // reduce()方法对累加器和数组中的每个元素（从左到右）应用一个函数，以将其减少为单个值
        // 只有getters.cartProducts  有价钱   不能用state.added的数据（里面没有价格，要重新找价格）
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

const actions = {
    // 点击了确认购买按钮之后  就将当前购物车中的商品进行清空  并且当且购物车商品要进行结算
    checkout ({ commit, state }, products) {
        const savadCartItems = [...state.added]
        commit(types.SET_CHECKOUT_STATUS, null)
        // 清空购物车
        commit(types.SET_CART_ITEMS, { items: [] })
        shop.buyProducts(
            products,
            () => commit(types.SET_CHECKOUT_STATUS, 'successful'),
            () => {
                commit(types.SET_CHECKOUT_STATUS, 'failed')
                commit(types.SET_CART_ITEMS, { items: savadCartItems})
            }
        )
    }
}

const mutations = {
    [types.SET_CHECKOUT_STATUS] (state, status) {
        state.checkoutStatus = state
    },

    [types.SET_CART_ITEMS] (state, { items }) {
        state.added = items
    },

    // types.ADD_TO_CART 常量用中括号括起来   第一个是要修改数据就要的state  第二个是传的参数
    [types.ADD_TO_CART] (state, { id }) {
        state.checkoutStatus = null
        // 通过传商品的id  到购物车中找出商品
        const record = state.added.find(product => product.id === id)
        // 如果购物车中没有商品就把商品加入购物车   否则只是数量加一
        if(!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}