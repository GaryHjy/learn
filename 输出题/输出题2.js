setTimeout(() => {
  console.log(1)
}, 0);

new Promise((resolve) => {
  console.log(2);
  for (let i = 0; i < 10000; i++) {
    i === 9999 && resolve();
  }
  console.log(3)
}).then(() => {
  console.log(4)
})


console.log(5);