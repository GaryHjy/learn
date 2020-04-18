const Promise = require('./promise');

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 1000);
})

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('promise2')
  }, 1000);
})

// catch方法
promise.then(res => {
  console.log(res)
}).catch(e => {
  console.log('err', e)
})

// all方法
Promise.all([1,2,promise, promise2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
