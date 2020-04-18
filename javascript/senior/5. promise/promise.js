// https://promisesaplus.com/

// Promise解决异步问题，恶魔金字塔（回调地狱），并发异步处理
// Promise能解决链式调用问题
// 1. Promise是一个类 类中需要传入executor执行器 默认会立即执行
// 2. Promise内部中会提供两个方法，可以更改Promise的状态 状态：等待态、成功态、失败态
// resolve触发成功  reject触发失败
// Promise一旦成功就无法失败， 失败的情况为reject、抛出异常
// 3. Promise实例都有一个then方法，分别为成功的回调和失败的回调

// 要求
// 只有pending中的状态才可以修改其promise的状态
// 需要try catch监听executor立即执行函数异常 捕获其抛出的错误 如果内部出错，需要手动调用reject向下传递
// 发布订阅：如果如果executor为异步
// Promise状态为pending状态时，将then的中的两个函数push到存储成功的回调数组中和失败的回调数组中
// 在resolve reject中将对应的回调数组重新执行
// Promise链式调用then方法多次 每次调用then方法，都会默认返回一个promise新的实例
// 如果返回的是一个值则会传递到下一个promise的成功中
// 如果返回的事一个promise的话，则会将这个promise的结果传递到下一个promise的成功中
// 如果then中返回一个promise的且为reject方法时，则会传递到下一个promise的失败中
// 如果then中抛出异常的时候，则会传递到下一个promise中的失败中
// catch方法 特点：如果then中没有错误处理，默认会找到距离最近的catch，catch也是then，遵循then的规则



const PENDING = 'PENDING'; // 等待态
const RESOLVED = 'RESOLVED'; // 成功态
const REJECTED = 'REJECTED'; // 失败态

class Promise {
  constructor(executor) {

    this.status = PENDING; // 默认为等待态
    this.value = undefined; // 成功原因
    this.reason = undefined; // 失败原因

    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    let resolve = val => {
      if (this.status === PENDING) { // 只有pending中的状态才可以修改其promise的状态
        this.status = RESOLVED;
        this.value = val;

        // 执行成功数组中的函数
        this.onResolveCallbacks.forEach(method => method())
      }

    }
    let reject = val => {
      if (this.status === PENDING) { // 只有pending中的状态才可以修改其promise的状态
        this.status = REJECTED;
        this.reason = val;

        // 执行失败数组中的函数
        this.onRejectCallbacks.forEach(method => method())
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      // 手动调用reject向下传递
      console.log(error);
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === RESOLVED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    // PENDING状态中的executor为异步逻辑
    if (this.status === PENDING) {

      // 将onFulfilled存储到数组中
      this.onResolveCallbacks.push(() => {
        // push一个函数，方便扩展
        onFulfilled(this.value);
      })

      // 将onRejected存储到数组中
      this.onRejectCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}

// 导出
module.exports = Promise

// ------------------例子--------------------------------
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok")
//   }, 1000);
// })

// 1. 普通调用 then中两个参数方法 onfulfilled（成功） onfulfilled（失败）
// promise.then((data) => {
//   console.log('success', data)
// }, (error) => {
//   console.log('error', error)
// })

// 2. 特殊调用
// promise.then(data => {
//   // then 方法中可以返回一个值（不是promise），会将这个值传递到下一个then方法回调中
//   return data;
// }).then(data => {
//   // 如果返回的是一个promise，那么会将这个promise的结果传递到下一个then方法回调中
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       // resolve('hello')
//       reject('word')
//     }, 1000);
//   })
// }).then(() => {
//   console.log('success1')
// }, err => {
//   // 如果失败函数中返回的为普通值或者promise，会走到下一个promise函数中的成功中
//   console.log('err1', err);
//   // throw new Error('失败')
// }).then(() => {
//   console.log('success2')
// }, () => {
//   // 只有当前置promise返回失败或者抛出异常的时候才会走下个promise的失败中
//   console.log('err2')
// }).catch(() => {
//   // 捕获错误，先找距离自己最近的，如果最近的没有错误处理，就会catch到
//   console.log('catch')
// }).then(() => {
//   console.log('success3')
// })