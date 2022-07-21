function toMaximum(arr) {
  let count = 0;
  let value;
  arr.reduce((map, key) => {
    map[key] = map[key] ? map[key] += 1 : 1;
    if(map[key] > count) {
      count = map[key];
      value = key;
    }
    return map;
  }, {});
  return value;
}

const key = toMaximum([1, 2, 3, 4, 5, 5, 6])
console.log(key);