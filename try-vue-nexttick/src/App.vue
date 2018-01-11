<template>
  <div id="app">
    <div>姓名：{{name}}</div>
    <ul ref="movies">
      <li v-for="item in movies" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
// 最重要的是虚拟DOM diff算法：所有的值的设置、改变，会汇聚到一起，生成一个模板（虚拟DOM）然后一次挂载到页面上，这样就提高了效率
// 多次数据的改变只要对页面操作一次
// $nextTick 执行在所有数据改变之后    异步！
export default {
  name: 'app',
  data() {
    return {
      name: "",
      movies: []
    }
  },
  // 还没有创建时   可以利用此时取完成组件实例化之前的事情
  // 页面还没有render的时候，是不能被设置的    this.name = "旅梦开发团";  任何未来发生的事情都不能被执行
  beforeCreate () {
    // $nextTick 是vue模板更新最本质的
    this.$nextTick(() => {
        console.log("旅梦");
        this.name = "旅梦";
    });
  },
  mounted () {
    this.name = "旅梦开发团";
    // fetch 是es6 中Ajax的替代品
    // 异步请求
    fetch("https://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie#!method=get")
    .then(data => data.json())  // then是可预期的  catch是不可预期的  data.json()将二进制流转化成json对象
    .then(result => {
      // 数据渲染到页面上需要时间（diff算法---集合多个元素的改变再对页面进行更新）   异步的、如果没有nextTick 会直接执行颜色改变的内容  那么此时页面上就没有元素
      this.movies = result.subjects;
      this.$nextTick(() => {
        this.$refs.movies.getElementsByTagName("li")[0].style.color = "red";
      })
      // this.$refs.movies 找到元素的节点
      // 此时无法改变页面字体的颜色
      // 因为上一步的数据设置还没有执行完diff 算法，没有完成虚拟DOM模板的更替，页面上的元素还没有出现，此时页面是空的，根本获取不到ul元素内容
      // diff 算法就是将多个操作汇聚到一个   数据到页面上显示需要时间
      // this.$refs.movies.getElementsByTagName("li")[0].style.color = "red";
      // 而nextTick不一样，它是异步的   是在页面渲染完成之后执行的
    })
    .catch(err => {

    })
  },
  components: {
    
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
