function debounce(fn, wait = 500) {
  let timer;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
}

const fn = debounce(function(name) {
  console.log('name:', name); 
})

fn('xiaoming');
fn('xiaohong')