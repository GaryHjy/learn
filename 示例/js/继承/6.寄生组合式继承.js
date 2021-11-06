function inheritPrototype(Son, Parent) {
  const ParentPrototype = Object.create(Parent.prototype)
  ParentPrototype.constructor = Son
  Son.prototype = ParentPrototype
}

function Parent(name) {
  this.name = name
}

Parent.prototype.showName = function() {
  console.log(this.name)
}

function Son(name) {
  Parent.call(this, name)
}

inheritPrototype(Son, Parent)

const SonInstance = new Son('son')

SonInstance.showName()


// 利用盗用构造函数继承属性，使用混合式原型链继承方法
// 混合式原型链继承方法是通过定义一个函数，其内部通过创建父类的原型的副本，通过设置副本的constructor属性，解决重写原型导致默认constructor丢失的问题，最后将副本赋予子类
// 优点：
// 这里只调用了一次父类构造函数，避免了子类原型上不必要也用不到的属性，因此可以说这种继承的效率更高。而且，原型链仍然保持不变，因此 instanceof 操作符和 isPrototypeOf()方法正常有效。寄生式组合继承可以算是引用类型继承的最佳模式。

