const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000);
})

Promise.customRace = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve, reject)
    })
  })
}


// Promise.race([promise1, promise2]).then(res => {
//   console.log(res);
// }).catch(e => {
//   console.log('error', e);
// })

Promise.customRace([promise1, promise2]).then(res => {
  console.log(res);
}).catch(e => {
  console.log('error', e);
})