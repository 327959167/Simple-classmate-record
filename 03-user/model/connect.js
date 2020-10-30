// 导入mongoose模块
const mongoose = require( 'mongoose' )
  // 连接数据库
mongoose
  .connect( 'mongodb://localhost/AlumniBook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } )
  .then( ( ) => console.log( '数据库连接成功' ) )
  .catch( ( ) => console.log( '数据库连接失败' ) )
