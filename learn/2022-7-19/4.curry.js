function curry(fn) {
  var length = fn.length;
  var args = Array.prototype.slice.call(arguments, 1);

  return function() {
    var _args = args.concat(Array.prototype.slice.call(arguments));
    if(_args.length < length) {
      return curry.apply(this, [fn].concat(_args));
    }
    return fn.apply(this, _args);
  }
}

var fn = curry(function(a, b, c, d, e) {
  console.log([a, b, c, d, e]);
})

fn(1)(2, 3)(4)(5);