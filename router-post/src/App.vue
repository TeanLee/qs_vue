<template>
  <div id="app">
      <!-- 评分组件   是一个双向绑定   值能改变分数   分数可以改变值
      子组件和父组件绑定在一起   类似于一个输入绑定
      v-model 会默认给子组件传值 -->
      <el-rate v-model="rate1"></el-rate>
  </div>
</template>

<script>
import ELRate from "@/components/ELRate"
export default {
    data() {
        return {
            rate1: null
        }
    },
    components: {
        "el-rate": ELRate
    }
}
</script>

<style>

</style>
