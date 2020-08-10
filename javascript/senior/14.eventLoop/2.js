setTimeout(() => {
  console.log(1);
}, 0);

new Promise(resolve => {
  console.log(2)
  for(let i = 0; i <= 1000; i++){
    if (i === 1000) {
      resolve(1000)
    }
  }
  console.log(3)
}).then(() => {
  console.log(4);
})

console.log(5);