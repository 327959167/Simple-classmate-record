// 获取请求的url的地址
const url = require( 'url' )

// 导入用户集合创建规则
const User = require( '../model/user' )

module.exports = async( req, res ) => {
  const { query } = url.parse( req.url, true )
  await User.findByIdAndDelete( { _id: query.id } )
  res.redirect( 301, '/list' )
  res.end( )
}
