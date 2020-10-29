// a === 1 && a === 2 && a === 3 为true

// class A {
//   constructor(value) {
//     this.value = value;
//   }

//   toString() {
//     return this.value++;
//   }
// }

// let a = new A(1)

// 对象做比较时，会调用内部的toString方法或者valueOf方法
// if (a == 1 && a == 2 && a == 3) {
//   console.log('ok');
// }

let value = 1;

Object.defineProperty(globalThis, 'a', {
  get() {
    return value++;
  }
})

if (a === 1 && a === 2 && a === 3) {
  console.log('ok');
}