<template>
  <div class="searchResult">
    <el-row :gutter="20">
        <el-col :span="20" :offset="2"  class="out-row" onclick="window.open('http://www.baidu.com')">
            <div v-for="(msg, idx) in msgs" :key="idx">
              <div v-for="(item, id) in msg" :key="id">
                <el-row class="inner-row">
                  <el-col :span="6" class="result-span span-l">{{Object.prototype.toString.call(item)}}</el-col>
                  <el-col :span="6" class="result-span span-r">
                    <a>{{item}}</a>
                    <br/><i class="el-icon-star-on">{{item}}</i>
                  </el-col>
                </el-row>
              </div>
            </div>
        </el-col>
    </el-row>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      msgs: ""
    }
  },
  mounted: function(){
      axios.get('https://api.bootcdn.cn/libraries.json')
      .then(msg => {
        console.log(msg)
        this.msgs = msg
      })
      .catch(error => {
          console.log('error');
          alert('error');
      })
  }
}
</script>

<style>
.out-row {
  margin-top: 50px;
  padding: 0;
  border: 1px solid #edf0ef;
  margin-bottom: 100px;
}
.result-span {
  padding: 25px 0 25px 25px;
  color: #3b3b38;
  font-size: 16;
  font-weight: bold;
  text-align: left;
}
.inner-row:first-child {
  border: none;
}
.inner-row {
  border-top: 1px solid #edf0ef;
}
.inner-row:hover {
  cursor: pointer;
  background-color: #F0F0F0;
}
.span-l {
  color: black;
}
.span-r {
  font-size: 14px;
  color: #ada8a3;
  font-weight: normal;
}
.el-icon-star-on {
  padding-top: 10px;
  font-size: 12px;
}
</style>
