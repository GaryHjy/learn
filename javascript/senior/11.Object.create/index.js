let obj = {
  name: '小明',
  age: 18
}

// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__  // MDN描述
let newObj = Object.create(obj)

function createObj(proto) {
  function F() {}
  F.prototype = proto // 将对象继承为prototype属性
  return new F;
}

let mockCreate = createObj(obj);

console.log(obj, newObj.__proto__)
console.log(obj, mockCreate.__proto__);