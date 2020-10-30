// 导入mongoose模块
const mongoose = require( 'mongoose' )
  // 创建集合规则
const UserSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  gender: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  contactInformation: {
    type: String,
  },
} )

//   创建集合
const User = mongoose.model( 'User', UserSchema )

// User.create( {
//   name: '李尚鸿',
//   gender: '男',
//   school: '九江职业技术学院',
//   site: '江西九江',
//   contactInformation: 'QQ:2865333429',
// } )

module.exports = User
