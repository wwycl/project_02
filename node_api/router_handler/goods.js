// 导入数据库操作模块
const { result } = require('@hapi/joi/lib/base')
const db = require('../db/index')


exports.getGoods = (req, res) => {
    // 定义 sql 语句
    const sql = `select * from ev_goods`

     // 调用执行 SQL 语句
     db.query(sql, (err,results) => {

        // 执行 sql 语句失败
        if (err) return res.cc(err)

        // 查询商品信息成功
        res.send({
            num: results.length,
            status: 0,
            message: '获取商品信息成功!',
            data: results,
        })
     } )
}

exports.getGoods_pet = (req, res) => {

    // 定义 SQL 语句
    const sql2 = `select * from ev_goods where goods_classify='宠物'`
    
    // 调用 db 执行语句
    db.query(sql2, (err, results) => {

        // 执行语句失败
        if (err) return res.cc(err)

        // 执行语句成功
        res.send({
            status: 0,
            message: '查询宠物商品信息成功!',
            data: results,
        })
    })
    
}

exports.getGoods_kaoyan = (req, res) => {

    // 定义 SQL 语句
    const sql2 = `select * from ev_goods where goods_classify='考研资料'`
    
    // 调用 db 执行语句
    db.query(sql2, (err, results) => {

        // 执行语句失败
        if (err) return res.cc(err)

        // 执行语句成功
        res.send({
            status: 0,
            message: '查询考研资料商品信息成功!',
            data: results,
        })
    })
    
}

exports.getGoods_tbook = (req, res) => {

    // 定义 SQL 语句
    const sql2 = `select * from ev_goods where goods_classify='二手教材'`
    
    // 调用 db 执行语句
    db.query(sql2, (err, results) => {

        // 执行语句失败
        if (err) return res.cc(err)

        // 执行语句成功
        res.send({
            status: 0,
            message: '查询二手教材商品信息成功!',
            data: results,
        })
    })
    
}


exports.getGoods_electronic= (req, res) => {

    // 定义 SQL 语句
    const sql2 = `select * from ev_goods where goods_classify='电子产品'`
    
    // 调用 db 执行语句
    db.query(sql2, (err, results) => {

        // 执行语句失败
        if (err) return res.cc(err)

        // 执行语句成功
        res.send({
            status: 0,
            message: '查询电子产品商品信息成功!',
            data: results,
        })
    })
    
}

// 获取商品总分类
exports.getGoods_clsssify = (req, res) => {
    // 定义 sql 语句
    const sql = `select * from ev_classify_total`

     // 调用执行 SQL 语句
     db.query(sql, (err,results) => {

        // 执行 sql 语句失败
        if (err) return res.cc(err)

        // 查询商品信息成功
        res.send({
            num: results.length,
            status: 0,
            message: '获取商品分类信息成功!',
            data: results,
        })
     } )
}

// 获取轮播图表
exports.getGoods_lunbo = (req, res) => {
    // 定义 sql 语句
    const sql = `select * from ev_lunbo`

     // 调用执行 SQL 语句
     db.query(sql, (err,results) => {

        // 执行 sql 语句失败
        if (err) return res.cc(err)

        // 查询商品信息成功
        res.send({
            num: results.length,
            status: 0,
            message: '获取轮播图表成功!',
            data: results,
        })
     } )
}
