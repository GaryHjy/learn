Function.prototype.myCall = function(context) {
  context = context || window;
  context.fn = this;

  var args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments['+ i +']')
  }
  var result = eval('context.fn(' + args +')');
  delete context.fn;
  return result

}

const obj = {
  name: 'obj name'
}

function showName(name) {
  console.log(name, this.name);
}

showName.myCall(obj, '小明');