function timeout(fn, time) {
  const timeout = new Promise((resolve) => {
    setTimeout(resolve, time);
  }).then(() => {
    throw new Error('timeout');
  })
  return function(...args) {
    return Promise.race([fn.apply(this, args), timeout]);
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
