import Mock from 'mockjs'
import loginAPI from './login'

// 切换登录表单的页面
// loginAPI.loginByUsername  用于页面跳转的校验  判断权限
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)

export default Mock