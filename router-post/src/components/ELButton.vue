<template>
  <!-- :class 动态绑定属性(类名) -->
  <!-- buttonSize 不用size    是因为下面有计算  用的是buttonSize -->
  <button class="el-button" 
          :class="[type? 'el-button--' + type : '', buttonSize? 'el-button--' + buttonSize : '', {'is-disabled': disabled}]"
          @click="handleClick"
          :type="nativeType"
          :disabled="disabled">
      <!-- <slot></slot> 是插槽
      slots.default 用于defalut是否有 slot -->
      <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        nativeType: {
            type: String,
            default: "button"
        },
        type: {
            type: String,
            default: "default"
        },
        size: String
    },
    methods: {
        handleClick(evt) {
            // 子组件向父组件  传递参数
            this.$emit("click", evt)
        }
    },
    computed: {
        buttonSize() {
            return this.size
        }
    }
}
</script>

<style>

</style>
