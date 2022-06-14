Function.prototype.myApply = function(context, arr) {
  context = Object.create(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for(var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args  + ')');
  }
  delete context.fn;
  return result;
}

var obj = {
  name: 'obj name'
}

function showName(name, age) {
  console.log(name, age, this.name);
}

showName.myApply(obj, ['xiaoming', 18]);