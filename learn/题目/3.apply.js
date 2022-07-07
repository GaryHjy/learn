Function.prototype.myApply = function(context, arr) {
}

var obj = {
  name: 'obj name'
}

function showName (name, age) {
  console.log(name, age, this.name);
}

showName.myApply(obj, ['xiaoming', 18]);
