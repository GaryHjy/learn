Promise.customAll = function(promises) {
  return new Promise((resolve, reject) => {
    const length = promises.length;
    const result = new Array(length)
    let counter = 0
    for (let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(res => {
        counter++;
        result[i] = res
        if (length === counter) {
          return resolve(result)
        }
      }, reason => {
        return reject(reason)
      })
    }
  })
}

const successPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000);
})

const successPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000);
})

Promise.customAll([successPromise, successPromise2]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// Promise.all([successPromise, successPromise2]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log('err', err);
// })