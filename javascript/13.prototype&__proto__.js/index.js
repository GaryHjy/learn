// 原型 prototype
// 原型链 __proto__
// 每一个函数都有prototype属性
// 每一个对象都有__proto__属性

class Animal {
  constructor() {
    this.type = '哺乳类';
  }
}

Animal.prototype.type = '哺乳';

let animal = new Animal();

console.log(animal.__proto__ === Animal.prototype);


delete animal.type
console.log(animal.type)


console.log(animal.__proto__.__proto__ === Object.prototype)


// 原型链查找
// 对象属性查找方式，会先在自身实例上查找，找不到再往__proto__上面找，直到找到Object对象为止
// animal -> animal.type -> animal.__proto__ -> animal.__proto__.proto__

// 构造函数的prototype.constructor属性是指向该构造函数
console.log(Animal.prototype.constructor === Animal)

// 顶层的对象
console.log(Object.prototype.__proto__)


// 特殊的 Function Object（可以充当对象，也可以充当函数）
// __proto__  prototype 

console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.__proto__);

function Animal() {
  // this.a = 'a'
}

Animal.prototype.a = 'b';

let animal = new Animal()

// hasOwnProperty可以判断当前实例是否存在某个属性
console.log(animal.hasOwnProperty('a'))

// in关键字 会判断这个属性是否属于原型 或者 实例上的属性
console.log('a' in animal)