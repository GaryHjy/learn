// 一维数组，不重复，升序
const arr = [3,[11,[5,6],7,9,1,2,4],23,[5,6,12],31,2]

const flatArr = function(arr) {
  return arr.reduce((result, item) => result.concat(Array.isArray(item) ? flatArr(item) : [item]), [])
}

const resultArr = [...new Set(flatArr(arr))].sort((a, b) => a - b)

console.log(resultArr);
