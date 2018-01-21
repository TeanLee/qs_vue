<template>
    <div class="header">
        <div class="nav">
          <el-button class="left logo" type="text">BootCDN</el-button>
          <ul class="right">
              <li><el-button class="nav-right" type="text">API</el-button></li>
              <li><el-button class="nav-right" type="text">博客</el-button></li>
              <li><el-button class="nav-right" type="text">关于</el-button></li>
          </ul>
        </div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="title">
                    <h1>BootCDN</h1>
                    <p>
                        稳定、快速、免费的前端开源项目 CDN 加速服务<br>
                        <span>共收录了 <strong>3298</strong> 个前端开源项目</span>
                    </p>
                    <slot></slot>
                    <!-- <el-input size="large" class="input-con" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input> -->
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    width: 100%;
    height: 400px;
    background-color: #00b060;
    color: #ffffff;
}
.nav {
    width: 84%;
    height: 50px;
    margin-left: 8%;
    padding-top: 20px;
}
.left {
    float: left;
}
.right {
    float: right;
}
.logo {
    font-size: 24px;
    color: #ffffff;
}
.logo:hover {
    color: #ffffff;
}
ul {
    list-style: none;
}
.nav-right {
    color: #ffffffd7;
}
li {
    float: left;
    padding-left: 30px;
    margin-top: -10px;
}
li .el-button:hover {
    color: #ffffff;
}
.title h1 {
    margin-top: 20px;  
    font-size: 56px;
    font-weight: 500;
    color: #ffffff;
    text-shadow: -5px 5px 0 rgba(0,0,0,.1);
    margin: 0;
    padding: 0;
}
p {
    margin-top: 10px;
    padding: 0;
    color: #f4f4f4;
    font-size: 26px;
}
.title span {
    font-size: 16px;
    margin: 8px;
}
.input-con {
    padding: 10px;
}
.el-input {
    height: 16px; 
}
</style>
