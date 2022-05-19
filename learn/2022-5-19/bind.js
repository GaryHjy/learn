Function.prototype.myBind = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  function Fn() {};
  Fn.prototype = this.prototype;

  function bound() {
    var _args = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof Fn ? this : context, args.concat(_args))
  }

  bound.prototype = new Fn();
  return bound;
}