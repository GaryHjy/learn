### this

- this指向

流传的说法：谁调用它，this 就指向谁。  
总结：this 的指向，是在调用函数时根据执行上下文所动态确定的。

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
