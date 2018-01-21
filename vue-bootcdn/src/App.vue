<template>
  <div id="app">
    <bc-header>
      <el-input size="large" class="input-con" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
    </bc-header>
    <bc-logos></bc-logos>
    <search-result></search-result>
    <router-view/>
  </div>
</template>

<script>
import BCHeader from './components/common/header'
import BCLogos from './components/common/logos'
import SerachResult from './components/page/searchResult'

export default {
  name: 'App',
  components: {
    'bc-header': BCHeader,
    'bc-logos': BCLogos,
    'search-result': SerachResult
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
</style>
