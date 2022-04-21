// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例
const app = express()

const joi = require('joi')


// 配置 cors 中间件
const cors = require('cors')
// 注册为全局可用的中间件
app.use(cors())


// 配置解析表单数据的中间件(只能解析application/x-www-form-urlencoded 格式的表单数据)
app.use(express.urlencoded({ extended: false }))


// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
    // status 默认值为 1，表示失败的情况
    res.cc = function(err, status) {
      res.send({
          status,
          message: err instanceof Error ? err.message:err,
      })
    }
    next()
})


// 一定要在路由之前配置解析 Token 的中间件
const expressJwt = require('express-jwt')
const config = require('./config')
// 注意这里需要加一个算法：algorithms: ['HS256']
app.use(expressJwt({secret:config.jwtSecretKey, algorithms: ['HS256']}).unless({path: [/^\/api/]}))



// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)


// 导入并使用获取用户信息路由的模块
const  userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)


// 导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate')
// 注册并挂载前缀 
app.use('/my/article', artCateRouter)


// 导入商品的路由
const goodsRouter = require('./router/goods')
app.use('/api', goodsRouter)




// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 身份认证失败导致的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败!')
    // 未知的错误
    res.cc(err)
})









// 调用 app.listen 方法，指定端口号 并启动 web 服务
app.listen(80, function(){
    console.log('api server running at http://127.0.0.1:80')
})