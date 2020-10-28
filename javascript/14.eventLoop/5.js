process.nextTick(function() {
  console.log('1');
})

new Promise(function (resolve) {
  console.log('2');
  resolve();
}).then(function () {
  console.log('3');
  setTimeout(function () {
    console.log('4')
  });
});

setTimeout(function () {
  console.log('5')
});

new Promise(function (resolve) {
  setTimeout(function () {
    console.log('6')
  });
  resolve()
}).then(function () {
  setTimeout(function () {
    console.log('7')
    new Promise(function (resolve) {
      setTimeout(function () {
        console.log('8')
      });
      resolve()
    }).then(function () {
      setTimeout(function () {
        console.log('9')
      });
    });
  });
});
console.log('10') 


