Promise.customAll = function(promises) {
  
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