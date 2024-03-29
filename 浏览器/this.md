# this

## this指向

流传的说法：谁调用它，this 就指向谁。  
总结：this 的指向，是在调用函数时根据 **执行上下文（执行环境）** 所动态确定的。

```js
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

Foo.getName();
getName();
Foo().getName();
new Foo.getName();
new Foo().getName();

```
输出结果
```js
Foo.getName(); // 2  函数的静态方法
getName(); // 4  // 变量提升
Foo().getName(); //1  // 函数作用域
new Foo.getName(); // 2 // 函数的静态方法 new优先级
new Foo().getName(); // 3 // 实例方法

```

### 优先级

```
new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
```

- 构造函数和 this（new绑定）

new 操作符调用构造函数，具体做了什么?

```js
// 创建一个新的对象；
// 将构造函数的 this 指向这个新对象；
// 为这个对象添加属性、方法等；
// 最终返回新对象。
var obj  = {}
obj.__proto__ = Foo.prototype
Foo.call(obj)
```

如果在构造函数中出现了显式 return 的情况，那么需要注意分为两种场景
```js
function Foo(){
    this.user = "foo"
    const o = {}
    return o
}
const instance = new Foo()
console.log(instance.user)
```
将会输出 undefined，此时 instance 是返回的空对象 o。
```js
function Foo(){
    this.user = "foo"
    return 1
}
const instance = new Foo()
console.log(instance.user)
```
将会输出 foo instance 是返回的目标对象实例 this。

结论：如果构造函数中显式返回一个值，且返回的是一个对象，那么 this 就指向这个返回的对象；如果返回的不是一个对象，那么 this 仍然指向实例。

修改this指向的方法

```
注：箭头函数的绑定无法被修改
```