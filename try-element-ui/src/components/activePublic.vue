<template>
  <div class="activePublic">
      <el-steps :space="200" :active="step" class="step">
        <el-step title="活动信息"></el-step>
        <el-step title="报名签到"></el-step>
        <el-step title="分享设置"></el-step>
        <el-step title="个性设置"></el-step>
      </el-steps>
      <transition name="fade">
          <!-- 子路由 -->
          <router-view class="view"></router-view>
      </transition>
      <div class="btn-group">
          <!-- @click.native.prevent 阻止默认事件 -->
          <el-button @click.native.prevent="handlePreview" v-show="preview">预览</el-button>
          <el-button @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
          <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</el-button>
          <el-button @click.native.prevent="handlePublish" v-show="publish" type="primary">发布活动</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            step: 1,
            preview: false,
            preStep: false,
            nextStep: true,
            publish: false
        }
    },
    methods: {
        handlePreview () {
            console.log("预览")
        },
        handlePreStep () {
            // this.$router ?
            // 出栈
            this.$router.go(-1)
            this.step --
            this.goStep(this.step)
        },
        handleNextStep () {
            this.$router.push(`/activePublic/step${this.step+1}`)
            this.step ++
            this.goStep(this.step)
        },
        handlePublish () {
            console.log("发布活动")
        },
        goStep (n) {
            switch (n) {
                case 1: 
                    this.preview = false
                    this.preStep = false
                    this.nextStep = true
                    this.publish = false
                    break
                case 2:
                    this.preview = false
                    this.preStep = true
                    this.nextStep = true
                    this.publish = false
                    break
                case 3:
                    this.preview = false
                    this.preStep = true
                    this.nextStep = true
                    this.publish = false
                    break
                case 4:
                    this.preview = false
                    this.preStep = true
                    this.nextStep = false
                    this.publish = true
                    break
            }
        },
        watch: {
            // 监听路由的改变
            "$route": function(to, from) {
                console.log(to)
                console.log(from)
            }
        }
    }
}
</script>

<style>

</style>
