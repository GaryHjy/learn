(function() {

  window.addEventListener('resize', throttle(function(){
    console.log(11111);
  }))

  function output() {
    console.log(1)
  }

  function throttle(fn, wait = 500) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this,args)
      }, wait);
    }
  }
})()