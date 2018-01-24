<template>
  <div class="version">
      <el-row :gutter="20">
          <el-col :span="20" :offset="2" class="version-inner">
              <h3>版本：4.0.0</h3>
              <ul>
                  <li>
                      <span>复制link标签</span><span>复制链接</span>
                      <p>https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.css</p>
                  </li>
                  <li>
                      <span>复制link标签</span><span>复制链接</span>
                      <p>https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.css</p>
                  </li>
                  <li>
                      <span>复制link标签</span><span>复制链接</span>
                      <p>https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.css</p>
                  </li>
              </ul>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.version-inner {
    margin-top: 50px;
    margin-bottom: 100px;
    text-align: left;
}
h3 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 500;
}
ul {
    margin-left: 30px;
    border-left: 3px solid #2cc36b;
}
li {
    list-style-type: none;
    padding-left: 20px;;
    color: #333;
    border: 1px solid #ecf0f1;
    position: relative;
    font-size: 12px;
}
li:not(:last-child) {
    border-bottom: 0px solid #ffffff;
}
span {
    position: absolute;
    right: 0;
    color: #767676;
    padding: 5px 8px;
    cursor: pointer;
    border: 1px solid #e1e1e8;
    border-radius: 0 4px 0 4px;
}
span:hover {
    background-color: #27ae60;
    color: #ffffff;
}
span:first-child {
    right: 80px;
}
p {
    font-size: 16px;
}
</style>
