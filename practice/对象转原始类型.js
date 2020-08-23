const obj = {
  value: 123,
  // valueOf() {
  //   return 1
  // },
  // toString() {
  //   return 2
  // },
  // [Symbol.toPrimitive]() {
  //   return 3
  // }
}

console.log(obj + 1)

// Symbol.toPrimitive > valueOf > toString > default([object Object])