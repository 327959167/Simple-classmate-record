/*用户信息案例制作*/

// 导入express模块，搭建网站服务器
const express = require( 'express' )
const app = express( )
  // 导入path模块，用于拼接绝对路径
const path = require( 'path' )

//已在router模块
// querystring模块将查询到的数组类模块转化为对象
//const querystring = require( 'querystring' )
// 获取请求的url的地址
//const url = require( 'url' )

// 导入art-template模板
const template = require( 'art-template' )

// 设置art-template模板的基础路径
template.defaults.root = path.join( __dirname, 'views' )
  //设置模板的默认后缀（或导入模板变量）
  // template.defaults.imports.模板变量=模板变量;
template.defaults.extname = '.art'

// 数据库连接
require( './model/connect' )
const User = require( './model/user' )

// 跳转同学录列表页
app.get( '/list', require( './router/list' ) )

// 跳转同学录添加页面
app.get( '/add', require( './router/add_get' ) )

// 跳转同学录修改页面
app.get( '/modify', require( './router/modify_get' ) )

// 用户添加功能的实现
app.post( '/add', require( './router/add_post' ) )

// 修改用户功能的实现
app.post( '/modify', require( './router/modify_post' ) )

// 删除用户功能的实现
app.get( '/remove', require( './router/remove' ) )

// 监听3000端口
app.listen( 3000 )
console.log( '网站服务器搭建成功，请访问localhost:3000' )
