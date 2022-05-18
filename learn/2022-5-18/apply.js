
Function.prototype.myApply = function(context, array) {
  context = context || window;
  context.fn = this;

  var result
  if (!array) {
    result = context.fn()
  } else {
    var args = [];

    for (var i = 0; i < array.length; i++) {
      args.push('array[' + i + ']')
    }
    result = eval('context.fn('+ args +')')
  }
  delete context.fn;

  return result
}

const obj = {
  name: 'obj name'
}

function showName(name, hongName) {
  console.log(name, hongName, this.name)
}

showName.myApply(obj, ['小明', '小红'])