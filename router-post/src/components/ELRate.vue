<template>
  <div class="el-rate" role="slider" tabindex="0">
      <span @click="selectValue(item)" v-for="item in max" :key="item" class="el-rate__item">
          <!-- i通过图标字体库显示小星星
                classes 定义了一个类  通过计算显示有多少颗星星 -->
          <i :class="[classes[item-1]]" class="el-rate__icon" :style="getIconStyle(item)"></i>
      </span>
  </div>
</template>

<script>
// 1 click 确定多少分
// 2 mousemove  mouseleave  
// 3 change 事件 告诉外界数据的改变
export default {
    name: "ELRate",
    computed: {
        activeColor() {
            return this.getValueFromMap(this.currentValue, this.colorMap)
        },
        colorMap() {
            return {
                lowColor: this.colors[0],
                mediumColor: this.colors[1],
                highColor: this.colors[2],
                voidColor: this.voidColor
            }
        },
        voidClass() {
            return this.classMap.voidClass
        },
        activeClass() {
            return this.getValueFromMap(this.currentValue, this.classMap)
        },
        classes() {
            let result = []
            let i = 0
            let threshold = this.currentValue
            // 在分数  threshold  之前是亮的   后面是暗的
            for(; i < threshold; i++) {
                result.push(this.activeClass)
            }
            for(; i < this.max; i++) {
                result.push(this.voidClass)
            }
            return result
        }
    },
    data() {
        return {
            currentValue: this.value,
            classMap: {}
        }
    },
    props: {
        colors: {
            type: Array,
            default() {
                return ["#F7BA2A", "#F7BA2A", "#F7BA2A"]
            }
        },
        highThreshold: {
            type: Number,
            default: 4
        },
        lowThreshold: {
            type: Number,
            default: 2
        },
        iconClasses: {
            type: Array,
            default() {
                return ["el-icon-star-on", "el-icon-star-on", "el-icon-star-on"]
            }
        },
        voidIconClass: {
            type: String,
            default: "el-icon-star-off"
        },
        max: {
            type: Number,
            default: 5
        },
        // value 是从 父组件 v-model 传过来的值   这个名字是任意的
        // 如果 是自定义的   需要和父组件冒号后的自定义名字一样
        value: {
            type: Number,
            default: 0
        }
    },
    created() {
        if(!this.value) {
            // 子组件给父组件传值   如果父组件没有传值(给分)   默认给零分
            this.$emit("input", 0)
        }
        this.classMap = {
            voidClass: this.voidIconClass,
            lowClass: this.iconClasses[0],
            mediumClasses: this.iconClasses[1],
            highClasses: this.iconClasses[2]
        }
    },
    methods: {
        getIconStyle(item) {
            const voidColor = this.colorMap.voidColor
            return {
                color: item <= this.currentValue ? this.activeColor : voidColor
            }
        },
        // 出现不同的分数    星星的颜色会不一样    对不同分数下不同颜色星星的处理
        getValueFromMap(value, map) {
            let result = ""
            if(value <= this.lowThreshold) {
                result = map.lowColor || map.lowClass
            } else if(value >= this.highThreshold) {
                result = map.highColor || map.highClasses
            } else {
                result = map.mediumColor || map.mediumClasses
            }
            return result
        },
        selectValue(value) {
            // $emit("input" 提交一个input事件   促使父组件数据的改变    父组件数据的改变又会触发子组件的更新    实现了双向的绑定
            this.$emit("input", value)
        }
    },
    watch: {
        // 添加对value值的改变监听  同步给currentValue
        value(val) {
            this.currentValue = val
        }
    }
}
</script>

<style>

</style>
