// console.log(typeof []);
// console.log(typeof {})
// console.log(typeof null);
// console.log(typeof function(){});


// console.log(Object.prototype.toString.call('123123'));
// console.log(Object.prototype.toString.call({}));
// console.log(Object.prototype.toString.call([]));

// console.log([] instanceof Array);
// console.log([] instanceof Object);
// console.log([].__proto__ === Array.prototype);
// console.log([].__proto__.__proto__ === Object.prototype);

// instanceof 其实就是拿__proto__ 去跟要比较的对象的prototype做对比

class A {}

const a = new A()

console.log(a instanceof A)

function instanceOf(A, B) {
  B = B.prototype;
  A = A.__proto__;
  while(true) {
    if(A === null) {
      return false;
    }
    if(A === B) {
      return true;
    }
    A = A.__proto__;
  }
}

console.log('instanceOf', instanceOf([], Object))

let str = 'str'
console.log(str instanceof String)

// Symbol.hasInstance
console.log(String[Symbol.hasInstance](str))

class ValidateStr {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}

// console.log(ValidateStr[Symbol.hasInstance]('hello'))
console.log('hello' instanceof ValidateStr)

// 判断类型还有一种，可以找对象Constructor