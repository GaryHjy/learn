function extendParent(obj) {
  const clone = Object.create(obj)
  clone.showName = function() {
    console.log(this.name)
  }
  return clone
}

const sonInfo = {
  name: 'son'
}

const SonInstance = extendParent(sonInfo);

SonInstance.showName()

// 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。
// 缺点：给对象添加函数会导致函数难以重用，与构造函数模式类似。