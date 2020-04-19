// 1) bind方法可以绑定this指向
// 2) bind方法返回一个绑定后的函数（高阶函数）
// 3) 如果绑定的函数被new了，当前函数的this是当前的实例
// 4）new出来的结果可以找到原有类的原型

// 实现一个myBind函数， 如果面试的时候手写一个bind的话建议加上兼容性写法
Function.prototype.myBind = function (context) {
  var me = this;
  var args = Array.prototype.slice.call(arguments, 1);
  function F() {} // Object.create() 原理
  F.prototype = this.prototype;
  function bound() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = innerArgs.concat(args);
    // 当前this判断context
    return me.apply(this instanceof F ? this : context, finalArgs);
  }
  bound.prototype = new F();
  return bound;
}

let obj = {
  name: 'ayu'
}

function fn(name, age) {
  this.say = '说话'
  // console.log(`my name is ${name}；I'm ${age} years old`)
}

fn.prototype.test = 1

const newFn = fn.bind(obj, 'xiaoming')
let test = new newFn()
console.log(test.say)

const newBindFn = fn.myBind(obj, 'xiaohong')
let test1 = new newBindFn()
console.log(test1.say)
