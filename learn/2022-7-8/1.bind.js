Function.prototype.myBind = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  function Fn() {};
  Fn.prototype = this.prototype;

  function bound() {
    var _args = args.concat(Array.prototype.slice.call(arguments));
    return self.apply(this instanceof Fn ? this : context, _args)
  }

  bound.prototype = new Fn();
  return bound;
}

var obj = {
  name: 'obj name'
}

function showName (name, age) {
  console.log(name, age, this.name);
}

showName.myBind(obj, 'xiaoming')(18);