(function() {

  window.addEventListener('scroll', throttle(function(){
    console.log('scroll');
  }))

  function output() {
    console.log(1)
  }

  function throttle(fn, wait = 500) {
    let flag = true, timer = null;

    return function(...args) {
      if (!flag) return
      clearTimeout(timer)
      flag = false;
      timer = setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      }, wait);
    }
  }
})()