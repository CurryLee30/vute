const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; // MongoDB数据库的连接字符串
const client = new MongoClient(url);
const database = client.db('mydatabase');
const collection = database.collection('mycollection');
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}
connectToMongoDB()

module.exports = collection
