<template>
  <div id="app">
    <!-- nativeType 设置事件   对应的是button的type -->
    <el-button nativeType="submit" size="medium" @click="addComment">评论</el-button>
    <!-- :disabled 一定要加 :  作为动态绑定 -->
    <el-button :disabled="saveDisabled" @click="doSave" size="small" type="primary">发布</el-button>
    <el-button size="mini" type="text">前往</el-button>
  </div>
</template>

<script>
import ELButton from "@/components/ELButton"

export default {
  name: 'app',
  data() {
    return {
      saveDisabled: true
    }
  },
  mouted() {
    setTimeout(() => {
      this.saveDisabled = false
    }, 5000)
  },
  methods: {
    addComment() {
      console.log("添加评论")
    },
    doSave() {
      console.log("发布")
    }
  },
  components: {
    "el-button": ELButton
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
