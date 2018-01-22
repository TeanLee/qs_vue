<template>
  <div class="searchResult">
    <el-row :gutter="20">
        <el-col :span="20" :offset="2"  class="out-row">
            <el-row class="inner-row">
              <el-col :span="6" class="result-span span-l">bootstrap</el-col>
              <el-col :span="6" class="result-span span-r">
                <a>The most popular</a>
                <br/><i class="el-icon-star-on">456</i>
              </el-col>
            </el-row>

            <el-row class="inner-row">
              <el-col :span="6" class="result-span span-l">bootstrap</el-col>
              <el-col :span="6" class="result-span span-r">
                The most popular
                <br /><i class="el-icon-star-on"></i>456
              </el-col>
            </el-row>
        </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
     
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
