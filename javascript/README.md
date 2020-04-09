### this

- this指向

流传的说法：谁调用它，this 就指向谁。  
总结：this 的指向，是在调用函数时根据执行上下文所动态确定的。

- 优先级

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

### 高阶函数

- 函数参数是一个函数（回调函数也是高阶函数）
- 函数返回一个函数

### 类型判断

```
typeof 
缺点：无法判断对象类型
```

```
constructor
缺点：无法判断是谁构造出来，不能判断undefined和null，并且它是不安全的，因为contructor的指向是可以被改变
```

```
instanceof
缺点：不能识别出基本的数据类型 number、boolean、string、undefined、unll、Symbol
```

```
Object.prototype.toString
较全的判断js的数据类型
```

### 闭包

- 函数嵌套函数时，内层函数引用了外层函数作用域下的变量，并且内层函数在全局环境下可访问，就形成了闭包。
