<template>
  <ul>
      <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }}
          <br>
          <button :disabled="!product.inventory" @click="addToCart(product)">Add to cart</button>
      </li>
  </ul>
</template>

<script>
// 进阶的API   形成映射map  优化操作
import { mapGetters, mapActions } from 'vuex'
// 形成映射的两个对应的方法分别是   this.$store.getters   this.$store.dispatch()
export default {
    computed: mapGetters({
        products: 'allProducts'
    }),
    created () {
        // dispatch提出请求   由 store 进行数据的更新
        // 请求API  对数据进行改变
        this.$store.dispatch('getAllProducts')
    },
    // mapAction 是方法的映射
    methods: mapActions([
        'addToCart'
    ])
}
</script>

<style>

</style>
