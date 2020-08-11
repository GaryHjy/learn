(function () {

  window.addEventListener('scroll', debounce(function() {
    console.log(22);
  }))

  function debounce(fn, wait = 500) {
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