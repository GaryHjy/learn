Object.customCreate = function(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn;
}


let obj = {
  name: 'obj',
  age: 18
}

const newObj = Object.create(obj)

const newCustomObj = Object.customCreate(obj)

newCustomObj.name = 123

console.log(obj, newObj, newCustomObj.name);