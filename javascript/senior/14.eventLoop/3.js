setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);

  new Promise(() => {
    console.log(3);
  })
}, 0);

console.log(4);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(5);
  }, 0);
})