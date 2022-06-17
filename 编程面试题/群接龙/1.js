class People {
  constructor(name) {
    this.name = name;
    this.events = {};
  }

  // TODO: 请在此处完善代码
  on(key, cb) {
    if (!this.events[key]) {
      this.events[key] = []
    }
    this.events[key].push(cb);
  }

  emit(key, ...args) {
    const cbs = this.events[key];
    if(cbs && cbs.length) {
      cbs.forEach(cb => cb(...args));
    }
    
  }

  off(key, cb) {
    const cbs = this.events[key];
    if(cbs && cbs.length) {
      const index = cbs.findIndex(c => c === cb);
      if (index >= 0) {
        this.events[key].splice(index, 1);
      }
    }
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

/* 以下为测试代码 */
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`)
}

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`)
}

const jerry = new People('Jerry')
jerry.sayHi()
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1)
jerry.on('greeting', say2)

jerry.emit('greeting', 'Hi')
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1)
jerry.emit('greeting', 'Hi')
// => 只输出：'Hi, nice meeting you, too'