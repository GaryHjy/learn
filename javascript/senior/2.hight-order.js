// 函数扩展 面向切面编程
function say(who) { // 装饰
  console.log('say', who);
}

// 在说话之前，先干别的事情
Function.prototype.before = function(callback) {
  // 箭头函数中没有arguments
  //  args 剩余参数 []
  return (...args) => { //箭头函数作用域中没有this 所以会往上一层进行查找
    callback();
    // 展开运算符
    this(...args); // this指向，谁调用函数，this指向谁
  }
}

let newSay = say.before(function() {
  console.log('刷牙')
})

newSay('我')