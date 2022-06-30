
// 首节流
// function throttle(fn, wait = 500) {
//   let last = 0;
//   return function() {
//     const now = Date.now();
//     if(now - last >= wait) {
//       last = now;
//       fn.apply(this, arguments);
//     }
//   }
// }

// 尾节流
function throttle(fn, wait = 500) {
  let timer = null;
  
  return function(...args) {
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null
      }, wait)
    }
  }
}

var fn = throttle(function(name) {
  console.log(`name:${name}`);
})

fn('xiaoming');
setTimeout(() => {
  fn('xiaohong');
}, 1000);