<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
      <el-button nativeType="submit"></el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9">
      <el-button nativeType="submit"></el-button>
    </el-badge>
    <!-- :isDot="true"  或者直接传   isDot   可以传值  变成小圆点 -->
    <el-badge class="item" :value="1" :max="9" isDot>
      <el-button nativeType="submit"></el-button>
    </el-badge>
    <!-- nativeType 设置事件   对应的是button的type -->
    <el-button nativeType="submit" size="medium" @click="addComment">评论</el-button>
    <!-- :disabled 一定要加 :  作为动态绑定 -->
    <el-button :disabled="saveDisabled" @click="doSave" size="small" type="primary">发布</el-button>
    <el-button size="mini" type="text">前往</el-button>
  </div>
</template>

<script>
import ELBadge from "@/components/ELBadge"
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
    "el-button": ELButton,
    "el-badge": ELBadge
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
