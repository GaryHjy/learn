Array.prototype.myMap = function(callback, context) {

  if(this === null || this === undefined) {
    throw new TypeError("Cannot read property 'map' of null or undefined");
  }

  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new TypeError(callback + ' is not a function')
  }

  const O = Object(this);
  const T = context;

  const len = O.length >>> 0;
  const A = new Array(len);

  for (let k = 0; k < len; k++) {
    if (k in O) {
      const value = O[k];
      const mapValue = callback.call(T, value, k, O);
      A[k] = mapValue;
    }
  }
  return A;
}

[1,2,3,4].myMap(function(item) {
  return item * 2
})