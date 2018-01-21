<template>
  <div id="app">
    <bc-header>
      <el-input size="large" class="input-con" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
    </bc-header>
    <router-view/>
  </div>
</template>

<script>
import BCHeader from './components/common/header'

export default {
  name: 'App',
  components: {
    'bc-header': BCHeader
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
