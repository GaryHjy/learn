function Parent(name) {
  this.name = name

  this.showName = function() {
    console.log(this.name)
  }
}

function Son(name) {
  Parent.call(this, name)
}

const SonInstance = new Son('son')

console.log(SonInstance.name)


// 基本思路很简单:在子类构造函数中调用父类构造函数。因为毕竟函数就是在特定上下文中执行代码的简单对象，所以可以使用 apply()和 call()方法以新创建的对象为上下文执行构造函数。
// 存在的问题
// 只能通过在构造函数中定义方法才能实现方法的继承