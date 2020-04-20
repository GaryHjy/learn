const obj = {
  name: '小明'
}

function fn(name, age) {
  console.log(this.name)
  console.log(`${name} ${age}`)
}

const obj1 = {
  a: 1,
  b: 2
}

function sum() {
  return this.a + this.b
}

// call特点
// 1) 可以改变我们当前函数的this指向
// 2) 还会让当前函数执行
// 3) 函数还有可能有返回值

// call做了什么:
// 将函数设为对象的属性
// 执行 & 删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window

Function.prototype.myCall = function(context) {
  // 判断上下文是否存在
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  // 忽略第一个参数开始循环
  for(let i = 1; i < arguments.length; i++) {
    args.push('arguments['+i+']')
  }
  // args ["arguments[1]", "arguments[2]"]
  // 利用数组toString的特性，将args装换成字符串 '','',''
  let result = eval('context.fn('+args+')')
  delete context.fn; // 删除context上挂载的fn
  return result; // 函数是有返回值
}

fn.call(obj, 'xiaohong', 18)

fn.myCall(obj, 'xiaoming', 20)

const callSum = sum.call(obj1)
console.log('callSum', callSum)

const myCallSum = sum.myCall(obj1)
console.log('myCallSum', myCallSum)