// 导入 express
const express  = require('express')

// 创建路由
const router = express.Router()

// 1.导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入需要的验证规则对象
const { add_cate_schema } = require('../schema/artcate')

// 导入文章分类的路由处理函数
const artcate_handler = require('../router_handler/artcate')



// 获取文章分类的列表数据的路由
router.get('/cates', artcate_handler.getArticleCates)

// 新增文章分类的路由
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates)






// 向外共享路由对象
module.exports = router