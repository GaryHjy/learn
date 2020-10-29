function timeout(fn, time) {
  let timeout = new Promise(resolve => {
    setTimeout(resolve, time)
  }).then(() => {
    throw new Error('timeout')
  })
  return (...args) => Promise.race([fn(args), timeout])
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
