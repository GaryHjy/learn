function output() {
  console.log(this.a, this.b)
}

var a = 1;
let b = 2;

var obj = {
  a: 3,
  b: 4,
  c: () => {
    console.log(this.a)
  },
  d: function() {
    console.log(this.a)
  },
  e: output
}

var fn = obj.c
var fn2 = obj.d
var fn3 = obj.e
var fn4 = obj.c.bind(this)
var fn5 = obj.d.bind(this)
var fn6 = obj.c.bind(obj)
var fn7 = obj.d.bind(obj)

output();
obj.c();
obj.d();
obj.e();
fn();
fn2();
fn3();
fn4();
fn5();
fn6();
fn7();
