<template>
  <div class="logos">
      <a href="http://www.bootcdn.cn/bootstrap/" target="_blank" title="bootstrap"><img src="../../assets/bootstrap.jpg" alt="bootstrap"></a>
      <a href="http://www.bootcdn.cn/react/" target="_blank" title="react"><img src="../../assets/react.jpg" alt="react"></a>
      <a href="http://www.bootcdn.cn/jquery/" target="_blank" title="jquery"><img src="../../assets/jQuery.jpg" alt="jQuery"/></a>
      <a href="http://www.bootcdn.cn/angular/" target="_blank" title="angular"><img src="../../assets/angular.jpg" alt="angular"></a>
      <a href="http://www.bootcdn.cn/vue/" target="_blank" title="vue"><img src="../../assets/vue.jpg" alt="vue"></a>
      <a href="http://www.bootcdn.cn/backbone/" target="_blank" title="backbone"><img src="../../assets/backbone.jpg" alt="backbone"></a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    created: function() {
        axios.get('https://api.bootcdn.cn/libraries/vue.json')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('error');
            alert('error');
        })
    }
}
</script>

<style scoped>
.logos {
    width: 100%;
    height: 50px;
    border-top: 1px solid #e5e4e1;
    border-bottom: 1px solid #e5e4e1;
    background-color: #f6f5f4;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
img {
    width: 36px;
    height: 36px;
    margin: 0 40px 0 40px;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
}
img:hover {
    cursor: pointer;
    filter: none;
}
</style>
