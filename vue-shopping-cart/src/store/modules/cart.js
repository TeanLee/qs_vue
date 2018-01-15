import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
    added: [],
    checkoutStatus: null
}

const getters = {
    checkoutStatus: state => state.checkoutStatus,

    cartProducts: (state, getters, rootState) => {
        return state.added.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },

    cartToTotalPrice: (state, getters) => {
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

    [types.ADD_TO_CART] (state, id) {
        state.checkoutStatus = null
        const record = state.added.find(product => product.id === id)
        if(!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity ++
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}