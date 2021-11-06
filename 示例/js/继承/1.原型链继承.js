function Parent() {
  this.name = 'parent'
}

Parent.prototype.showName = function() {
  console.log(this.name)
}

function Son() {}

Son.prototype = new Parent()

const SonInstance = new Son()

SonInstance.showName()

// 原型链继承：将实例化的父类赋值给子类的原型（prototype）
// 存在的问题：
// 1.当父类中存在属性为引用类型时，当存在多个实例的时候，实例都可以修改这个属性值，导致相互影响。
// 2.子类实例化无法向父类传参
