const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 2000);
})

Promise.customAllSettled = function(promises) {
  return new Promise((resolve, reject) => {
    const length = promises.length
    const result = new Array(length)
    let counter = 0
    for (let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(value => {
        counter++;
        result[i] = {
          status: 'fulfilled',
          value
        }
        if (counter === length) {
          resolve(result)
        }
      }).catch(reason => {
        counter++;
        result[i] = {
          status: 'rejected',
          reason
        }
        if (counter === length) {
          resolve(result)
        }
      })
    }
  })
}

Promise.allSettled([promise1, promise2]).then(res => {
  console.log(res);
})

Promise.customAllSettled([promise1, promise2]).then(res => {
  console.log(res);
})