const Promise = require('./promise')

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 1000);
})

// 1. 普通调用 then中两个参数方法 onfulfilled（成功） onfulfilled（失败）
promise.then((data) => {
  console.log('success', data)
}, (error) => {
  console.log('error', error)
})