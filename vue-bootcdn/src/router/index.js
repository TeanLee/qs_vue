import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SerachResult from '@/components/common/searchResult'
import Version from '@/components/common/version'
import searchInput from '@/components/common/search-input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: SerachResult,
        searchInput: searchInput
      }
    },{
      path: '/name',
      name: 'resultList',
      components: {
        default: Version
      }
    }
  ]
})
