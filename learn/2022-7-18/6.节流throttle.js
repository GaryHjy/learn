function throttle(fn, wait = 500) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if(now - last >= wait) {
      fn.apply(this, args);
      last = now;
    }
  }
}

// function throttle(fn, wait = 500) {
  
// }


const fn  = throttle(function(name) {
  console.log('name:', name);
})


fn('xiaoming');
fn('xiaohong');