// 订阅发布
// 关系：发布方与订阅方
const e = {
  _obj: {},
  _callbacks: [],
  on: function(callback) {
    // 订阅，将获取到的函数存储到数组中
    this._callbacks.push(callback);
  },
  emit: function(key, value) {
    this._obj[key] = value;
    // 依次执行数组中的函数
    this._callbacks.forEach(method => {
      method(this._obj);
    })
  }
}

// 每次发布都会粗发回调函数
e.on(function(obj) {
  // 进行判断操作
  if (Object.keys(obj).length === 2) {
    console.log(obj)
  }
})
// e.on(function (obj) {
//   console.log(obj)
// })

// 获取随机数
function getRandomCount() {
  return Math.floor(Math.random() * 1000)
}

setTimeout(() => {
  e.emit('name', '小明')
}, getRandomCount());

setTimeout(() => {
  e.emit('age', '18')
}, getRandomCount());
