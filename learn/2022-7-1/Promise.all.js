Promise.customAll = function(promises) {
  const length = promises.length;
  let count = 0;
  const result = new Array(length);
  
  return new Promise((resolve, reject) => {
    for(let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        count += 1;
        if(count === length) {
          resolve(result)
        }
      }).catch(e => {
        reject(e)
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