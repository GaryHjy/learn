

// function toMaximum(arr) {
//   const map = {};
//   for(let key of arr) {
//     map[key] = map[key] ? map[key] += 1 : 1;
//   }
//   let maxKey
//   let max = 0
//   for(let i in map) {
//     if (map[i] > max) {
//       max = map[i];
//       maxKey = i
//     }
//   }
//   return maxKey
// }

function toMaximum(arr) {
  let maxKey
  let max = 0;

  arr.reduce((result, key) => {
    result[key] = result[key] ? result[key]+=1 : 1;
    if(result[key] > max) {
      max = result[key]
      maxKey = key
    }
    return result
  }, {})
  return maxKey
}

const key = toMaximum([1, 2,3,4, 4, 5, 5, 5, 6])
console.log(key);