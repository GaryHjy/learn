Function.prototype.myCall = function(context) {
  context = Object.create(context) || window;
  context.fn = this;
  var args = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn('+ args +')');
  delete context.fn;
  return result
}

var obj = {
  name: 'obj name'
}

function showName(name, age) {
  console.log(name, age, this.name);
}

showName.myCall(obj, 'xiaoming', 18);