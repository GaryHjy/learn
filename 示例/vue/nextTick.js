const callbacks = []
let pending = false

function nextTick(cb) {
  callbacks.push(cb)
  if (!pending) {
    pending = true
    setTimeout(flushCallback, 0)
  }
}

function flushCallback() {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}


let uid = 0
class Watcher {
  constructor() {
    this.id = ++uid
  }

  update() {
    console.log('watch' + this.id + 'update')
    queueWatcher(this)
  }

  run() {
    console.log('watch' + this.id + '视图更新啦')
  }
}


let has = {}
let queue = []
let waiting = false

function queueWatcher(watcher) {
  const id = watcher.id
  if (!has[id]) {
    has[id] = true
    queue.push(watcher)

    if (!waiting) {
      waiting = true
      nextTick(flushScheduleQueue)
    }
  }
}


function flushScheduleQueue() {
  let watcher, id
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    id = watcher.id
    has[id] = null
    watcher.run()
  }
  waiting = false
}

let watch1 = new Watcher()
let watch2 = new Watcher()

watch1.update()
watch1.update()
watch2.update()