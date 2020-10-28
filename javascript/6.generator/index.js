// generator 生成器 生成的为迭代器 
// 特点 普通函数执行时，没有停止功能，generator函数 执行时可以停止
// 函数中yield关键字，遇到yield则停止，紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值

// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// // iterator迭代器中返回一个next方法
// const hw = helloWorldGenerator(); //返回的是 Object [Generator] {}

// hw.next(); //  { value: 'hello', done: false }

// hw.next(); // { value: 'world', done: false }

// hw.next(); // { value: 'ending', done: true }


// function * read() {
//   // 遇到yield关键字会停止
//   let a = yield 1;
//   console.log(a);
//   let b = yield 2;
//   console.log(b);
//   let c = yield 3;
//   console.log(c)
// }

// let it = read()
// it.next(); // 第一次传参是无意义的
// it.next('a:1'); // next传递的参数会给上一次yield的返回值
// it.next('b:2'); 
// it.next('c:3');

// generator + promise
// function* test() {
//   const content = yield new Promise(resolve => setTimeout(() => {resolve('test')}, 1000));
//   const result = yield new Promise(resolve => setTimeout(() => { resolve(content) }, 1000));
//   return result
// }

// let it = test();
// let {value} = it.next();
// value.then(res => {
//   console.log('content', res)
//   let {value} = it.next(res);
//   value.then(res => {
//     console.log('result',res);
//     let {value, done} = it.next(res);
//     console.log(value, done);
//   })
// })

// 依次去执行调用next方法，将最终结果返回
// function co(it) {
//   return new Promise((resolve, reject) => {
//     function next(r) {
//       let { value, done } = it.next(r);
//       if (done) {
//         resolve(value);
//       } else {
//         Promise.resolve(value).then(data => {
//           next(data);
//         }, reject)
//       }
//     }
//     next()
//   })
// }

// co(test()).then(res => {
//   console.log(res)
// })
 
function* test() {
  // 内部可以try catch 捕获异常
  try {
    yield 1
  } catch (e) {
    console.log('e', e)
  }
}

let it = test();
it.next();
it.throw('err'); // 可以抛出异常
