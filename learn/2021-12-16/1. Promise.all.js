

Promise.customAll = (promises) => {
  return new Promise((resolve, reject) => {
    const length = promises.length
    const result = new Array(length)
    let index = 0

    promises.forEach(promise => {
      Promise.resolve(promise).then(res => {
        result[index] = res
        index++
        if (index === length) {
          resolve(result)
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
}


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 2000)
})


const promise2 = new Promise((resolve, reject) => {
  resolve('promise2')
})


Promise.customAll([promise1, promise2]).then(res => {
  console.log(res);
})