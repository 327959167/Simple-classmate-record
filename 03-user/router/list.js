// 创建用户集合
const User = require( '../model/user' )

// 导入art-template模板
const template = require( 'art-template' )

module.exports = async( req, res ) => {
  // 查询数据库内全部要用户信息
  let users = await User.find( )
    // 利用art-template模板将所有用户信息以列表视图展现在 /list页面
  const list = template( 'list', {
    users: users,
  } )
  res.send( list )
}
