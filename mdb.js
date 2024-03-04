const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // MongoDB数据库的连接字符串
const client = new MongoClient(url);
const database = client.db('mydatabase');
const collection = database.collection('mycollection');
// 连接数据库
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

// connectToMongoDB();

// 插入数据
async function insertDocument() {
  const document = { name: 'James', age: 38 };
  // const result = await collection.insertOne(document);
  const result = await collection.insertMany([
    { id: 1, name: "解雨臣", age: "12", gender: "男" },
    { id: 2, name: "张起灵", age: "12", gender: "女" },
    { id: 3, name: "黑瞎子", age: "22", gender: "男" },
    { id: 4, name: "王胖子", age: "22", gender: "男" },
  ])
  // console.log('Document inserted:', result.insertedId);
  console.log("result", result);
}

// insertDocument();

//查询
async function getDocument() {
  try {
    const query = { age: { $gt: 25 } };
    const result = await collection.find(query).toArray();
    console.log('查询成功', result);
  } catch (error) {
    console.log('查询失败', error)
  }

}
getDocument()


//更新
async function updateDocument() {
  const filter = {
    name: '王胖子'
  }
  const updateDoc = { $set: { age: 30 } }
  const result = await collection.updateOne(filter, updateDoc);
  console.log('result', result);
}
// updateDocument()

//关闭数据库链接
async function closeConnection() {
  try {
    await client.close();
    console.log('Connection to MongoDB closed');
  } catch (error) {
    console.error('Error closing connection to MongoDB', error);
  }
}

// closeConnection();