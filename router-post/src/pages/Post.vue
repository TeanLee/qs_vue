<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading
    </div>
    <div class="error" v-if="error">
      {{error}}
    </div>
    <!-- 路由变化的时候   添加切换动画 -->
    <transition name="slide">
      <div v-if="post" class="content">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
// API 放置获取的数据
// webpack 会自动捕捉后缀
import { getPost } from "@/api"
export default {
  data() {
    return {
      loading: false,
      error: null,
      post: null
    }
  },
  created() {
    this.fetchData()
  },
  // 监听路由对象
  // $route.params.id 带参数的路由   此时只有id 发生了变化   post还是不变的 那么就要监听路由的动态参数的变化
  watch: {
    "$route": "fetchData"
  },
  methods: {
    fetchData() {
      // 在每次切换时  清空内容   因为每次切换用的都是同样的组件
      this.error = this.post = null
      this.loading = true
      // params 是因为在配置的时候有冒号  形成了动态映射  根据id 取不同的文章
      // $route.params 获得路由的参数
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if(err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>

<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
