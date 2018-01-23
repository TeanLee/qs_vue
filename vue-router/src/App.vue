<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name="left"/>
    <router-view name="right"/>
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/HI">hi页面</router-link>
      <!-- <router-link :to="{name: 'HI', params:{username: 'usname'}}">hi页面</router-link> -->
    </p>
    <p>{{ $route.name }}</p>
    <HI></HI>
  </div>
</template>

<script>
import HI from './components/Hi'

export default {
  name: 'App',
  components: {
    'HI': HI
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
  margin-top: 60px;
}
</style>
