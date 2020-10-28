// 观察者模式
// 观察者与被观察者的关系，观察者在被观察者之上，当被观察者发生改变时通知观察者

class Subject {
  constructor(name) {
    this.name = name;
    this.state = '开心';
    this.observers = [];
  }

  attach(o) {
    this.observers.push(o);
  }

  setState(state) {
    this.state = state; // 更新状态
    this.observers.forEach(o => o.update(this)); // 通知观察者
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(s) {
    console.log(`${this.name}: ${s.name}${s.state}`); // 更新
  }
}

const son = new Subject('儿子');
const father = new Observer('父亲');
const mother = new Observer('母亲');
son.attach(father);
son.attach(mother);
son.setState('不开心');
son.setState('开心');