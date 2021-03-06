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
// 如果返回的是一个promise的话，则会将这个promise的结果传递到下一个promise的成功中
// 如果then中返回一个promise的且为reject方法时，则会传递到下一个promise的失败中
// 如果then中抛出异常的时候，则会传递到下一个promise中的失败中
// catch方法 特点：如果then中没有错误处理，默认会找到距离最近的catch，catch也是then，遵循then的规则



const PENDING = 'PENDING'; // 等待态
const RESOLVED = 'RESOLVED'; // 成功态
const REJECTED = 'REJECTED'; // 失败态

// promise2, x, resolve, reject
function resolvePromise(promise2, x, resolve, reject) {
  // 此方法兼容所有promise库，n个库中间，执行流程一致
  // 1. 不能引用通过对象，避免死循环
  if (promise2 === x) {
    return reject(new Error('Chaining cycle detected for promise #<Promise>'))
  }

  // 2. 判断x的类型，x如果是对象或者函数，说明它有可能为一个promise

  // 用于记录是否已经调用，防止promise即调了成功 又调失败 调失败又调用成功
  let called;
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    // 如果为promise的话有then方法
    try {
      let then = x.then;
      if (typeof then === 'function') { // 走到这里确定为promise
        // 执行then方法，获取then方法的结果，传递至promise2
        then.call(x, y => {
          if (called) return
          called = true
          // 递归调用 then(resolve) resolve可能传递传递promise y可能是一个promise
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e); // 取then方法失败，抛出错误
    }
  } else {
    // 反之x为普通值
    resolve(x)
  }
}

class Promise {
  constructor(executor) {

    this.status = PENDING; // 默认为等待态
    this.value = undefined; // 成功原因
    this.reason = undefined; // 失败原因

    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    let resolve = val => {

      if (val instanceof Promise) {
        // 初始化new的时候，resolve可能会传递一个promise，递归调用，让resolve返回一个普通值
        val.then(resolve, reject)
        return
      }

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
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {

    // 防止then多次没有传递onFulfilled onRejected 方法
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }

    // 实现链式调用，创建一个promise
    let promise2 = new Promise((resolve, reject) => {

      if (this.status === RESOLVED) {
        // 执行then中的方法，可能返回一个普通的值或者promise，也有不存在的情况，如果发现为promise，需要执行promise，获取到promise的值与状态，传递给promise2
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) { // then方法报错，走到外层的错误处理，调用promise2的reject函数
            reject(e);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      // PENDING状态中的executor为异步逻辑
      if (this.status === PENDING) {

        // 将onFulfilled存储到数组中
        this.onResolveCallbacks.push(() => {
          // push一个函数，方便扩展
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        })

        // 将onRejected存储到数组中
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        })
      }
    })

    return promise2;
  }

  // catch方法本质上其实就是一个then函数
  catch (errCallback) {
    return this.then(null, errCallback)
  }
}

// 判断是不是promise
function isPromise(x) {
  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    if (typeof x.then === 'function') {
      return true
    }
  } else {
    return false
  }
}

Promise.defer = Promise.deferred = function () {
  const dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}

// promise.all 特点是让所有函数并行执行
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let i = 0;

    function processData(val, i) {
      arr[i] = val;
      if (++i === promises.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      let currentVal = promises[i];
      if (isPromise(currentVal)) {
        currentVal.then(y => {
          processData(y, i)
        }, reject)
      } else {
        processData(currentVal, i)
      }
    }
  })
}

// 实际上是返回一个resolve状态的promise
Promise.resolve = function (value) {
  return new Promise(resolve => {
    resolve(value)
  })
}

// 实际上是返回一个reject状态的promise
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

// promise.resolve可以接收一个promise
// promise.reject接收promise会有等待状态

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