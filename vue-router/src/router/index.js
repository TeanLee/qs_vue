import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import HI1 from '@/components/HI1'
import HI2 from '@/components/HI2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: HI1,
        right: HI2
      }
    },{
      path: '/Hi',
      name: 'Hi',
      components: {
        default: HelloWorld,
        left: HI2,
        right: HI1
      }
    }
  ]
})
