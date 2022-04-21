const { result } = require("@hapi/joi/lib/base")
const { required } = require("joi")

// 导入数据库操作模块
const db = require('../db/index')





// 获取文章分类
exports.getArticleCates = (req, res) => {
  // 定义 sql 语句
  const sql = `select * from ev_article_cate where is_delete=0 order by id asc`
  // 调用执行 SQL 语句
  db.query(sql, (err,results) => {
      // 1.执行 sql 语句失败
      if (err) return res.cc(err)

      // 2. 执行 sql 语句成功
      res.send({
          status: 0,
          message: '获取文章分类成功!',
          data: results,
      })
  })
}


// 新增文章分类的路由处理函数
exports.addArticleCates = (req, res) => {
    // 定义添加的 SQL 语句
    const sql = `select * from ev_article_cate where name=? or alias=?`
    // 执行查重操作
    db.query(sql, [req.body.name, req.body.alias], (err,results) => {
        if(err) return res.cc(err)

        // 分类名称 和 分类别名 都被占用
    if (results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')
    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body. name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')

  // TODO：新增文章分类

        // 定义插入文章分类的 sql 语句
        const sql2 = `insert into ev_article_cate set ?`
        // 调用执行新增文章分类的 SQL 语句
        db.query(sql2, req.body, (err, results) => {
            // sql 语句执行失败
            if (err) return res.cc(er)

            // sql 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('新增文章分类失败！')

            // 新增文章分类成功
            res.cc('新增文章分类成功！', 0)

        })
        

    })
}