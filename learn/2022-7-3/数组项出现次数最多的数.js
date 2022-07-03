function toMaximum(arr) {
  let count = 0;
  let maxValue;

  arr.reduce((map, item) => {
    map[item] = map[item] ? map[item]+=1 : 1;
    if(map[item] > count) {
      count = map[item];
      maxValue = item
    }
    return map
  }, {})
  return maxValue;
}

const key = toMaximum([1, 2, 3, 4, 5, 5, 6])
console.log(key);