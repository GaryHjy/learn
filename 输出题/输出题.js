function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      let callNow = !timeout;

      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e, text) {
  console.log(text, this);
  container.innerHTML = count++;
};

container.onmousemove = debounce((e) => getUserAction(e, '1'), 1000, true);
// container.onmousemove = debounce(getUserAction, 1000, true);
// container.onmousemove = debounce((e) => {
//   console.log(3, this), getUserAction(e, '3')
// }, 1000, true);