async function async1() {
  console.log(1);
  await async2()
  console.log(2)
}
async function async2() {
  return await new Promise((resolve, reject) => {
    resolve()
  })
}

async1()
new Promise(function (resolve, reject) {
  resolve()
})
  .then(function () {
    console.log(7)
  })
  .then(() => {
    console.log(9)
  })
  .then(() => {
    console.log(10)
  })
  .then(() => {
    console.log(11)
  })