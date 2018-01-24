<template>
  <div id="app">
    <bc-header>
      <router-view name="searchInput"/>
    </bc-header>
    <router-view name="logo"></router-view>
    <el-row>
      <el-col :span="22">
        <a class="alert">拒绝流量劫持，全面使用HTTPS！</a>
      </el-col>
    </el-row>
    <router-view/>
    <bc-footer></bc-footer>
  </div>
</template>

<script>
import BCHeader from '@/components/common/header'
import Footer from '@/components/common/footer'

export default {
  name: 'App',
  components: {
    'bc-header': BCHeader,
    'bc-footer': Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.alert {
  color: #aaa;
  float: right;
  font-size: 14px;
  line-height: 1.42857143;
  margin-top: 30px;
}
</style>
