console.log(1);

setTimeout(() => {
  console.log(2)
  new Promise(resolve => {
    console.log(3)
    resolve()
  }).then(() => {
    console.log(4)
  })
}, 0);

setTimeout(() => {
  console.log(5)
  new Promise(resolve => {
    console.log(6)
    resolve()
  }).then(() => {
    console.log(7)
  })
}, 0);

new Promise(resolve => {
  console.log(8);
  resolve()
})

console.log(9)