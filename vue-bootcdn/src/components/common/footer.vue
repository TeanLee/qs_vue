<template>
  <div>
      <el-row type="flex" justify="center" class="footer">
          <el-col :span="11">
              <h4>关于 BootCDN</h4>
              <p>BootCDN 是 <a href="http://www.bootcss.com/" target="_blank">Bootstrap 中文网</a>支持并维护的前端开源项目免费 CDN 服务，致力于为 Bootstrap、jQuery、Angular、Vuejs 一样优秀的前端开源项目提供稳定、快速的免费 CDN 加速服务。BootCDN 所收录的开源项目主要同步于 <a href="https://github.com/cdnjs/cdnjs" target="_blank" onclick="_hmt.push(['_trackEvent', 'footer', 'click', 'footer-github.com'])">cdnjs</a> 仓库。</p>
              <p>自2013年10月31日上线以来已经为30多万家网站提供了稳定、可靠的免费 CDN 加速服务。</p>
              <p>反馈或建议请发送邮件至：cdn@bootcss.com</p>
          </el-col>
          <el-col :span="6">
              <h4>友情链接</h4>
              <ul class="list-unstyled list-inline">
                  <li><a href="http://www.bootcss.com/" target="_blank">Bootstrap中文网</a></li>
                  <li><a href="http://www.ghostchina.com/" target="_blank">Ghost中国</a></li>
                  <li><a href="http://www.golaravel.com/" target="_blank">Laravel中文网</a></li>
                  <li><a href="http://www.jquery123.com/" target="_blank">jQuery中文文档</a></li>
                  <li><a href="https://www.webpackjs.com/" target="_blank">Webpack中文网</a></li>
                  <li><a href="https://www.npmjs.com.cn/" target="_blank">NPM中文网</a></li>
                  <li><a href="https://www.quanzhanketang.com/" target="_blank">全栈课堂</a></li>
                  <li><a href="http://www.91php.com/" target="_blank">Node.js中文文档</a></li>
                </ul>
          </el-col>
          <el-col :span="4">
              <h4>我们用到的技术</h4>
              <ul class="list-unstyled list-inline">
                  <li><a href="http://www.bootcss.com/" target="_blank">Bootstrap</a></li>
                  <li><a href="http://www.ghostchina.com/" target="_blank">Ghost</a></li>
                  <li><a href="http://www.jquery123.com/" target="_blank">jQuery</a></li>
                  <li><a href="https://babel.bootcss.com/" target="_blank">Babeljs</a></li>
                  <li><a href="http://lodashjs.com/" target="_blank">Lodash</a></li>
                  <li><a href="https://www.nodeapp.cn/" target="_blank">Grunt</a></li>
                  <li><a href="http://www.gulpjs.com.cn/" target="_blank">Gulp</a></li>
                  <li><a href="https://www.npmjs.com.cn/" target="_blank">NPM</a></li>
                  <li><a href="https://www.webpackjs.com/" target="_blank">webpack</a></li>
                  <li><a href="http://www.rollupjs.com/" target="_blank">rollup.js</a></li>
              </ul>
          </el-col>
      </el-row>
      <div class="copy-right">
      <span>© 2013-2018</span> 
      <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11008151号</a> 
      <span>京公网安备11010802014853</span>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    text-align: left;
    background-color: #27ae60;
    border-top: 1px solid #26aa5e;
    color: #fff;
    padding: 30px;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    font-size: 14px;
    float: left;
    text-decoration: none;
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}
.el-col {
    padding-left: 25px;
    padding-right: 25px;
}
h4 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
}
a {
    color: #ffffff;
    border-bottom: dotted 1px #a9dfbf;
    text-decoration: none;
}
a:hover {
    border-bottom: solid 1px #ffffff;
}
p {
    font-size: 14px;
}
.copy-right {
    width: 100%;
    height: 50px;
    background: #26aa5e;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #ffffff;
}
span {
    margin: 14px;
}
</style>
