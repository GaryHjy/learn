Function.prototype.myBind = function(context) {
  
}

var obj = {
  name: 'obj name'
}

function showName (name, age) {
  console.log(name, age, this.name);
}

showName.myBind(obj, 'xiaoming')(18);