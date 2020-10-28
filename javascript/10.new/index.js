function Animal(type) {
  this.type = type;
  // 构架函数如果返回的是对象引用类型，就直接获取该对象
  return {
    name: 'ayu'
  }
}

Animal.prototype.say = function() {
  console.log('say');
}


let animal = new Animal('哺乳类');

console.log(animal)
// console.log(animal.type);
// animal.say();

// new操作符做了这些事：

// 它创建了一个全新的对象
// 它会被执行[[Prototype]]（也就是__proto__）链接
// 它使this指向新创建的对象
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
// 如果函数没有返回对象类型Object(包含Function, Array, Date, RegExg, Error) ，那么new表达式中的函数调用将返回该对象引用

function mockNew() {
  // 截取arguments的第一个值，Constructor
  let Constructor = [].shift.call(arguments);
  let obj = {}; // 返回的结果
  obj.__proto__ = Constructor.prototype; // 继承原型上的方法
  let result = Constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

let mockAnimal = mockNew(Animal, '哺乳类');
console.log(mockAnimal)
// console.log(mockAnimal.type);
// mockAnimal.say()