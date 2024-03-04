const getData = (params) => {
  console.log('params', params);
  axios.get('http://localhost:3000/users/getData', params).then(res => {
    console.log('请求成功', res)
  }).catch(error => {
    console.log('请求失败', error)
  })
}

// 获取具有 id 为 "myButton" 的按钮元素
var button = document.getElementById('myButton');

// 添加点击事件监听器
button.addEventListener('click', function () {
  const params = { age: { $gt: 25 } }
  getData(params)
});