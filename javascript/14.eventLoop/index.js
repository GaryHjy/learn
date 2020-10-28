// Tasks, microTasks, queues and schedules
// 事件循环

// macroTasks(宏任务): setTimeout, setInterval, setImmediate, I/O, UI rendering
// microTasks(微任务): process.nextTick, Promise, MutationObserver

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');