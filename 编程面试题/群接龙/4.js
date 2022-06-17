const combo = (...fnArgs) => {
  // TODO: 请在此处完善代码

  return function() {
    const args = Array.prototype.slice.call(arguments);
    return fnArgs.reduceRight((rests, cur) => cur(rests), args)
  }
}

/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ''
const split = (a) => a.split('')

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
testForCombo(666)
// => ["4", "4", "5"]