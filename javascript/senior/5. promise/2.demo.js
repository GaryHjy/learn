const Promise = require('./promise');

let promise = new Promise(resolve => {
  resolve('hello')
})

// let promise2 = promise.then(data => {
//   return 100;
// })

// promise2.then(data => {
//   console.log('success', data)
// })


// Step1 如果引用同一个对象

// let promise2 = promise.then(() => {
//   return promise2
// })

// promise2.then(() => {

// }, err => {
//   console.log(err)
// })

// Step2 如果返回的是一个promise

let promise2 = promise.then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('return promise')
    }, 1000);
  })
})

promise2.then(data => {
  console.log('promise', data)
})