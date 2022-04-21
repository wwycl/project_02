// 导入 express 
const express = require('express')

// 创建路由实例
const router = express.Router()

// 导入商品信息的路由处理函数
const goods_handler = require('../router_handler/goods')



// 商品信息的路由
router.get('/goods', goods_handler.getGoods)

// 商品(宠物)信息的路由
router.get('/goods/pet',goods_handler.getGoods_pet)

// 商品(考研资料)信息的路由
router.get('/goods/kaoyan',goods_handler.getGoods_kaoyan)

// 商品(二手教材)信息的路由
router.get('/goods/tbook',goods_handler.getGoods_tbook)

// 商品(电子产品)信息的路由
router.get('/goods/electronic',goods_handler.getGoods_electronic)

// 商品总分类表的路由
router.get('/goods/classify', goods_handler.getGoods_clsssify)

// 轮播图表的路由
router.get('/goods/lunbo', goods_handler.getGoods_lunbo)




// 向外共享路由对象
module.exports = router

