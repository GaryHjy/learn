Promise.customRace = function(promises) {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve, reject)
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

Promise.customRace([promise1, promise2]).then(res => {
  console.log(res);
}).catch(e => {
  console.log('e', e);
})