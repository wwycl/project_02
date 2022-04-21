const express = require('express')

const router = express.Router()


// 导入用户路由模块处理函数对应的模块
const user_handler = require('../router_handler/user')


// 1.导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2.导入需要的验证规则对象
const { reg_login_schema} = require('../schema/user')



// 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证 
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)


// 用户登录
router.post('/login', expressJoi(reg_login_schema), user_handler.login)


module.exports = router