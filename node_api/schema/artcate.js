// 导入定义验证规则的包   
const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 定义分类名 和 分类别名 的校验规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// 验证规则对象 - 添加分类
exports.add_cate_schema = {
    body: {
      name,
      alias,
    }
  }