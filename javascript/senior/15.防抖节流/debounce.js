(function () {

  window.addEventListener('resize', debounce(function() {
    console.log('resize');
  }))

  function debounce(fn, wait = 500) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this,args)
      }, wait);
    }
  }
})()