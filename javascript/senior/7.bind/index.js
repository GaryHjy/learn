// 1) bind方法可以绑定this指向
// 2) bind方法返回一个绑定后的函数（高阶函数）
// 3) 如果绑定的函数被new了，当前函数的this是当前的实例
// 4）new出来的结果可以找到原有类的原型

Function.prototype.myBind = function (context) {
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  function Fn() {} // Object.create() 原理
  function fBound() {
    let args = Array.prototype.slice.call(arguments);
    that.apply(context, bindArgs.concat(args));
  }
  Fn.prototype = this.prototype;
  fBound.prototype = new Fn();
  return fBound;
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
