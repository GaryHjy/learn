Promise.customAllSettled = function(promises) {
  const length = promises.length;
  const result = new Array(length)
  let counter = 0;

  return new Promise((resolve) => {
    for (let promise of promises) {
      Promise.resolve(promise).then((value) => {
        result[counter] = {
          status: 'fulfilled',
          value
        }
        counter++
        if (length === counter) {
          resolve(result)
        }
      }).catch(reason => {
        result[counter] = {
          status: 'rejected',
          reason
        }
        counter++
        if (length === counter) {
          resolve(result)
        }
      })
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

Promise.customAllSettled([promise1, promise2]).then(res => {
  console.log(res);
})