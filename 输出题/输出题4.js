setTimeout(() => {
  console.log(1);
}, 1000);

new Promise(resolve => {
  console.log(2)
  resolve(3)
}).then(res => {
  console.log(res);
})

console.log(4);