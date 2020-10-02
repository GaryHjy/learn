function Foo() {
  getName = function() {
    console.log(1);
  }
  return this;
}

Foo.getName = function() {
  console.log(2);
}

Foo.prototype.getName = function() {
  console.log(3);
}

var getName = function() {
  console.log(4);
}

function getName() {
  console.log(5);
}

FFoo.getName(); // 2  函数的静态方法
getName(); // 4  // 变量提升
Foo().getName(); //1  // 函数作用域
new Foo.getName(); // 2 // 函数的静态方法 new优先级
new Foo().getName(); // 3 // 实例方法
