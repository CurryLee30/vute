const express = require('express');
const cors = require('cors');
const app = express();
// 开启跨域
app.use(cors());


// 引入不同模块路由
const usersRouter = require('./user.ts');
const finedRouter = require('./fined');

//注册路由
app.use('/users', usersRouter);
app.use('/fined', finedRouter);

const PORT = '3000'
app.listen(PORT, () => {
  console.log(`服务启动成功localhost:${PORT}`)
})