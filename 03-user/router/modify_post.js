// 导入用户集合创建规则
const User = require( '../model/user' )

// 获取请求的url的地址
const url = require( 'url' )

// querystring模块将查询到的数组类模块转化为对象
const querystring = require( 'querystring' )

module.exports = ( req, res ) => {
  const { query } = url.parse( req.url, true )
    // 接收用户提交的信息
  let formData = ''
  req.on( 'data', ( param ) => {
      formData += param
    } )
    // 将用户信息添加到数据库
  req.on( 'end', async( ) => {
    let user = querystring.parse( formData )
      // console.log( querystring.parse( formData ) )
      // 将用户数据添加到数据库内
    await User.updateOne( { _id: query.id }, user )
      // 页面重定向
    res.redirect( 301, '/list' )
    res.end( )
  } )
}
