// 导入数据库操作模块
const db = require('../db/index')


// 导入 bcryptjs 包
const bcrypt = require('bcryptjs')


// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
const config = require('../config')


// 注册路由的函数
exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的信息
    const userinfo = req.body 
    // 对表单中的数据，进行合法性的校验
    // if(!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不合法')
    // }
   
    // 定义 SQL 语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'

    db.query(sqlStr, userinfo.username, (err, results) => {
        // 执行 sql 语句失败
        if(err) {
            return res.cc()
        }
        // 判断用户名是否被占用
        if(results.length > 0) {
           return res.cc('用户名已被占用，请更换其他用户名！')
        }
        // TODO：用户名可以使用
        console.log(userinfo);
        // 调用 bcrypt.hashSync()对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo);

        // 定义插入新用户的 SQL 语句
        const sql = 'insert into ev_users set ?'
        // 调用 db.query()执行 SQL 语句
        db.query(sql, {username: userinfo.username, password: userinfo.password}, (err, results) =>{
          if(err) return res.cc(err)

          //判断影响行数是否为1
          if(results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试')
          // 注册用户成功
          res.send({
            status: 0,
            message: '注册用户成功',
        })
        })
    })

}


// 登录路由的函数
exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body
    // 定义 sql 语句
    const sql = 'select * from ev_users where username=?'
    // 执行 SQL 语句
    db.query(sql, userinfo.username, (err,results) => {
        // 执行sql语句失败
        if(err) return res.cc(err)
        // 执行sql语句成功
        if(results.length !==1) return res.cc('登录失败!用户名未注册')
        // TODO: 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if(!compareResult) return res.cc('登录失败!密码错误!')
        // TODO: 在服务端生成 Token 的字符串
        const user = {...results[0], password: '', user_pic:''}
        console.log(user);
        // 对用户的信息进行加密，生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn})
        console.log(tokenStr);
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr, //空格不能丢
        })
    })

    
}