(function() {

  document.addEventListener('scroll', throttle(function(){
    console.log('scroll');
  }))

  // 设置一个开关控制，不会立即触发
  // function throttle(fn, wait = 500) {
  //   let flag = true, timer = null;

  //   return function(...args) {
  //     if (!flag) return
  //     clearTimeout(timer)
  //     flag = false;
  //     timer = setTimeout(() => {
  //       fn.apply(this, args);
  //       flag = true;
  //     }, wait);
  //   }
  // }

  // 第一次会触发，后面不会触发
  // function throttle(fn, wait = 500) {
  //   // 记录上一次执行的时间戳
  //   let previous = 0;

  //   return function(...args) {
  //     // 对比当前时间戳与上次执行的时间戳的差值
  //     if(Date.now() - previous > wait) {
  //       // 更新
  //       previous = Date.now();
  //       fn.apply(this, args);
  //     }
  //   }
  // }

  // 结合
  // 第一次会触发，最后一次也会触发
  function throttle (fn, wait = 1000) {
    let previous = 0;
    let timer = null;
    return function (...args) {
      if(Date.now() - previous > wait) {
        clearTimeout(timer);
        timer = null;
        previous = Date.now();
        fn.apply(this, args);
      } else if(!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn.apply(this, args);
        }, wait)
      }
    }
  }
})()