## EventLoop

事件循环

- macroTasks(宏任务): setTimeout, setInterval, setImmediate, I/O, UI rendering
- microTasks(微任务): process.nextTick, Promise, MutationObserver

<!-- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/ -->

js执行时会从上往下执行，遇到普通的语法会直接执行，如果遇到宏任务，会将当前的宏任务推到宏任务的队列中，遇到微任务会将微任务推到微任务的队列中。先执行js任务队列中的任务，然后再将微任务里面的任务按照先进先出的规律将任务推进js任务队列中执行，然后再执行宏任务中的任务，重复以上的操作。