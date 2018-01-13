<template>
  <div class="el-badge">
      <slot></slot>
      <transition name="el-zoom-in-center">
          <!-- 语义化标签   位于元素的左上角
                v-text=""指定元素的文本内容  -->
          <sup v-show="!hidden&&(content||isDot)" v-text="content" class="el-badge__content" :class="{'is-fixed': true, 'is-dot': isDot}"></sup>
      </transition>
  </div>
</template>

<script>
export default {
    name: "ELBadge",
    props: {
        value: {},
        max: Number,
        isDot: Boolean,
        hidden: Boolean
    },
    computed: {
        content() {
            // 如果是原点   就直接返回    没有内容
            if(this.isDot) return
            
            const value = this.value
            const max = this.max

            if(typeof value === "number" && typeof max === "number") {
                return max < value ? `${max}+` : value;
            }
        }
    }
}
</script>

<style>

</style>
