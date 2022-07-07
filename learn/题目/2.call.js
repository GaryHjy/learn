Function.prototype.myCall = function(context) {
  
}

var obj = {
  name: 'obj name'
}

function showName (name, age) {
  console.log(name, age, this.name);
}

showName.myCall(obj, 'xiaoming', 18);
