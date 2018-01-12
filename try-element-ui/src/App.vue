<template>
  <div id="app">
    <!-- :class=""  绑定类名  取决于业务和输出  一种动态绑定    类名的输出取决于headerFixed（组件的状态） -->
    <header class="header" :class="{'header-fixed':headerFixed}">
      <el-row>
        <el-col :span="24">123</el-col>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">高级插件</el-menu-item>
          <el-menu-item index="2">在线商城</el-menu-item>
          <el-menu-item index="3">客户管理</el-menu-item>
          <el-menu-item index="4">系统设置</el-menu-item>
          <el-menu-item index="5">活动发布</el-menu-item>
        </el-menu>
      </el-row>
    </header>
    <div v-show="headerFixed" style="position:relative;height:60px;width:100%"></div>
    <main>
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <!-- index 实质上是形成了一个a标签 -->
          <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <transition name="fade">
          <router-view class="view" />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      headerFixed: true,
      active: true
    };
  },
  mounted () {
    // $router  只要vue 注册了router  就会有
    this.$router.push("/activePublic");
  },
  watch: {
    // 对路由的监听   这样能够实现页面对数据的改变
    "$route": function(to, from) {
      if (to.path == "./activePublic") {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
};
</script>

<style>
page {
  margin: 0;
  padding: 0;
}

#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}

header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header .el-menu-demo {
  padding-left: 300px !important;
}
/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
/*  */
.router-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #475669;
  text-decoration: none;
}
.is-active .router-link {
  color: #20a0ff;
}
/* 单选框 */
.el-form-item .el-radio + .el-radio {
  margin-left: 30px !important;
}
/* 进入和离开的动画  类似  生命周期 */
.fade-enter-active,
.fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
