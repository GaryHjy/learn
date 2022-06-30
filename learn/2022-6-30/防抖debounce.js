// 防抖
// 高频事件触发多次 只执行最后一次
function debounce(fn, wait = 500) {
  let timer;

  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait)
  }
}

var fn = debounce(function(name) {
  console.log(name);
})

fn('xiaoming');
fn('xiaohong');
