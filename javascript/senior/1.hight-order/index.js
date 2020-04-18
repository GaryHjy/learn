
function isType(type) {
  // 将类型type保存到代码块中，形成闭包
  return function(content) {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}

// 高阶函数实现第一个功能 保存变量 -> 闭包
const isString = isType('String');

// 闭包：函数在定义的时候就决定了它所在的作用域
console.log(isString('abcs'))

const isNumber = isType('Number');

console.log(isNumber(123123))
