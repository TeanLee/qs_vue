<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
      <el-button type="primary">
          {{$t('login.switchLanguage')}}
      </el-button>
      <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
    computed: {
        // language 不再属于本页面   而是数据归中央仓库管(有计算的过程和属性就用computed  属于vuex的API)   此时组件内部data 就应该少用甚至不用数据
        // 这样就使得数据不再绑死在属性内部    而是灵活的
        language () {
            // 获取中央的数据
            // 这就是数据一层层上报的结果    本地的改变会触发中央仓库的改变  导致页面的改变
            return this.$store.getters.language
        }
    },
//   data() {
//       return {
//         //   language: 'en'
        
//       }
//   },
  methods: {
      handleSetLanguage (lang) {
        // 值操纵的页面的更新
        this.$i18n.locale = lang
        // 将值的改变告诉中央   触发其他组件的更新
        // dispatch  会去调用actions（通知中央数据的改变）    此时这个方法写在app.js中
        // 参数： 方法的名字   传参
        // vuex 数据的传参是一层一层往上报    当前的方法=>actions=>mutations
        this.$store.dispatch('setLanguage', lang)
      }
  }
}
</script>
<style>

</style>


