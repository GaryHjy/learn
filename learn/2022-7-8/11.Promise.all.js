Promise.customAll = function(promises) {
  const length = promises.length;
  const result = new Array(length);
  let count = 0;

  return new Promise((resolve, reject) => {
    for(let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        if(++count === length) {
          resolve(result)
        }
      }).catch(reject)
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

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('errorPromise')
  }, 1000);
})

Promise.customAll([successPromise, successPromise2]).then(res => {
  console.log(res);
}).catch(err => {
  console.log('err', err);
})

Promise.customAll([successPromise, errorPromise]).then(res => {
  console.log(res);
}).catch(err => {
  console.log('err', err);
})