
function fn() {
  console.log(this, arguments)
}

Function.prototype.myApply = function(context, arr) {
  // 判断上下文是否存在
  context = context ? Object(context) : window;
  context.fn = this;
  let result;
  // 判断是否有传递参数数组
  if (!arr) {
    result = context.fn()
  } else {
    let args = [];
    // args ["arguments[1]", "arguments[2]"]
    // 利用数组toString的特性，将args装换成字符串 '','',''
    for (let i = 0; i < arr.length; i++) {
      args.push('arr['+i+']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn; // 删除context上挂载的fn
  return result; // 函数是有返回值
}

console.log(fn.apply(null, [1, 2, 3, 4, 5]))
console.log(fn.myApply(null, [1, 2, 3, 4, 5]))
