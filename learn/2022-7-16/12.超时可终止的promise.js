function timeout(fn, time) {
  const timeout = new Promise((resolve) => {
    setTimeout(resolve, time)
  }).then(() => {
    throw new Error('timeout');
  })
  return function(...args) {
    return Promise.race([timeout, fn.apply(this, args)])
  }
}

function test(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(name)
    }, 500)
  })
}

let newTest = timeout(test, 500)

newTest('aaa').then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})
