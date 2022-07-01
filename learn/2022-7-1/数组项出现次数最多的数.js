function toMaximum(arr) {
  const map = {};
  let max = 0
  let maxValue
  for(let value of arr) {
    map[value] = map[value] ? map[value] += 1 : 1;
    if(map[value] > max) {
      max = map[value]
      maxValue = value
    }
  }
  return maxValue
}

const key = toMaximum([1, 2, 3, 4, 5, 5, 6])
console.log(key);