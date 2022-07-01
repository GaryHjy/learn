function throttle(fn, wait = 500) {
  let last = 0;

  return function(...args) {
    const now = Date.now();
    if(now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  }
}

// function throttle(fn, wait = 500) {
//   let timer = null;

//   return function(...args) {
//     if(timer) return
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, wait); 
//   }
// }

const fn = throttle(function(name) {
  console.log('name:', name);
})

fn('xiaoming');
setTimeout(() => {
  fn('xiaohong');
}, 500);