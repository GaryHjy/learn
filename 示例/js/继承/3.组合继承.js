function Parent(name) {
  this.name = name
}

Parent.prototype.showName = function() {
  console.log(this.name)
}

function Son(name) {
  Parent.call(this, name);
}

Son.prototype = new Parent()

const SonInstance = new Son('son')

SonInstance.showName()

// 使用原型链继承的方式继承父类的方法，通过盗用构造函数继承父类的属性。
// 优点：弥补了原型链和盗用构造函数的不足