
Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;

  function bound() {
    var innerArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof Fn ? this : context, args.concat(innerArgs))
  }
  function Fn() {};
  Fn.prototype = this.prototype;
  bound.prototype = new Fn();
  return bound;
}


let obj = {
  name: 'ayu'
}

function fn(name, age) {
  this.say = '说话'
  // console.log(`my name is ${name}；I'm ${age} years old`)
}

fn.prototype.test = 1

const newFn = fn.myBind(obj, 'xiaoming')
let test = new newFn()
console.log(test.say)