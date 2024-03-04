
const express = require('express');
const cors = require('cors');
const app = express();
// const collection = require('./server/mongoDB')
app.use(cors());
// app.get('/getData', async (req, res) => {
//   try {
//     const query = req.params;
//     console.log('req', req)
//     const result = await collection.find(query).toArray();
//     // 构建规范的数据格式
//     const responseData = {
//       code: 200,
//       status: 'success',
//       message: '数据查询成功',
//       data: result
//     };
//     res.json(responseData)
//   } catch (error) {
//     console.log('查询失败', error)
//     res.status(500).send('服务器内部错误')
//   }
// })

//引入不同的模块路由





//注册路由
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务启动:localhost:${PORT}`)
})

module.exports = app  //导出Express应用实例