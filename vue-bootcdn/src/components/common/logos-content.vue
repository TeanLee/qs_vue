<template>
  <div class="logos-content">
      <ul>
          <li title="中文文档">中文文档</li>
          <li title="官网">官网</li>
          <li title="源码">源码</li>
          <li title="readme">readme</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logos-content {
    width: 100%;
    height: 50px;
    border-top: 1px solid #e5e4e1;
    border-bottom: 1px solid #e5e4e1;
    background-color: #f6f5f4;
    text-align: center;
}
ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
li {
    list-style-type: none;
    color: #2cc36b;
    font-size: 14px;
    margin-right: 30px;
    cursor: pointer;
}
</style>
