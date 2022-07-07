function timeout(fn, time) {
  
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
