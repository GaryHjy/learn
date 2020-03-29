class Vue {
  constructor(options) {
    // 保存配置信息
    this.$options = options;
    // 保存data数据
    this.$data = options.data;
    // 处理响应式
    this.observe(this.$data)

    // 测试Watcher
    // new Watcher(this, 'test')
    // this.test; // 读取属性，触发依赖收集

    new Compile(options.el, this);

    // 判断是否有created
    if (options.created) {
      options.created.call(this)
    }
  }

  observe(value) {
    // 判空处理
    if(!value || typeof value !== 'object') {
      return;
    }

    // 遍历data属性，实现响应式
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])

      // 执行代理
      this.proxyData(key)
    }) 
  }

  defineReactive(obj, key, val) {

    // 递归遍历对象
    this.observe(val)

    // 依赖 -> 一对一Dep
    const dep = new Dep();

    // 定义属性，参数三可定义配置项
    Object.defineProperty(obj, key, {
      get() {
        // 依赖收集
        Dep.target && dep.addDep(Dep.target)
        return val;
      },
      set(newVal) {
        if(newVal === val) {
          return;
        }
        val = newVal
        // 通知更新
        dep.notify();
      }
    })
  }

  // 代理data，挂载在this上
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}

// 管理Watcher示例，通知更新 
// Dep -> Watcher 一对多
class Dep {
  constructor() {
    this.deps = []
  }

  // 添加
  addDep(dep) {
    this.deps.push(dep);
  }

  // 通知->执行更新操作
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}

// Watcher 执行具体更新操作
class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updater = updater;
    Dep.target = this; // 依赖收集时用到
    this.vm[this.key];
    Dep.target = null; // 清除
  }

  // 更新操作
  update() {
    // console.log(`属性${this.key}更新`)
    this.updater.call(this.vm, this.vm[this.key])
  }
}
