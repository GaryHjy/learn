const Promise = require('./promise');

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise1')
//   }, 1000);
// })

// let promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('promise2')
//   }, 1000);
// })

// catch方法
// promise.then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log('err', e)
// })

// all方法
// Promise.all([1,2,promise, promise2]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// Promise.resolve
let p = new Promise((resolve, reject) => {
  resolve(new Promise(resolve => {
    setTimeout(() => {
      resolve(100)
    }, 1000);
  }))
})

p.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

Promise.resolve(1).then(res => {
  console.log(res)
})


Promise.reject('reject').catch(err => {
  console.log(err)
})