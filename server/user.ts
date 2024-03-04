const express = require('express');
const router = express.Router();
const collection = require('./mongoDB')
// 获取数据列表
router.get('/getData', async (req, res) => {
  try {
    const query = req.params;
    console.log('req', req)
    const result = await collection.find(query).toArray();
    // 构建规范的数据格式
    const responseData = {
      code: 200,
      status: 'success',
      message: '数据查询成功',
      data: result
    };
    res.json(responseData)
  } catch (error) {
    console.log('查询失败', error)
    res.status(500).send('服务器内部错误')
  }
})



module.exports = router;
