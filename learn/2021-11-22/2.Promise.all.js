Promise.customAll = function(promises) {
  const length = promises.length
  const result = new Array(length)
  let index = 0

  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(res => {
        result[index] = res
        index++
        if (index === length) {
          resolve(result)
        }
      }).catch(reject)
    }
  })
}

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject(2)
  }, 1000)
})

Promise.customAll([promise1, promise2]).then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})