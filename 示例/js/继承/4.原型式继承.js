function createObj(obj) {
  function Fn(){}
  Fn.prototype = obj
  return new Fn()
}

const obj = {
  name: 'name',
  list: [1, 2, 3]
}

const obj1 = createObj(obj)
const obj2 = createObj(obj)

obj1.list.push(4)

console.log(obj1)
console.log(obj2)


// 通过函数创建一个临时的构造函数，将传入的对象赋值链式的构造函数的原型，然后返回临时的构造函数的实例
// 注：属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的