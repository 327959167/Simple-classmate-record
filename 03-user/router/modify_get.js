// 导入用户集合创建规则
const User = require( '../model/user' )

// 导入用户访问url地址模块
const url = require( 'url' )

// 导入art-template模块
const template = require( 'art-template' )

module.exports = async( req, res ) => {
  const { query } = url.parse( req.url, true )
  let user = await User.findOne( { _id: query.id } )
  const modify = template( 'modify', {
    user: user,
  } )
  res.send( modify )
}
