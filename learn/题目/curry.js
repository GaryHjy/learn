function curry(fn) {
  
}

var fn = curry(function(a, b, c, d, e) {
  console.log([a, b, c, d, e]);
})

fn(1)(2, 3)(4)(5);