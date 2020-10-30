// 导入art-template模板
const template = require( 'art-template' )

module.exports = ( req, res ) => {
  const add = template( 'add', {} )
  res.send( add )
}
