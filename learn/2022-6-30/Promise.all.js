Promise.customAll = function(promises) {
  
  return new Promise((resolve, reject) => {
    const length = promises.length;
    const result = new Array(length)
    let count = 0
    for(let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res
        count++
        if(count === length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
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
  console.log('err', err);
})