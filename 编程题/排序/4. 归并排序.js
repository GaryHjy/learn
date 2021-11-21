const arr = [78, 22, 11, 14, 13, 5, 3, 1, 87, 77, 33]

const merge = (left = [], right = []) => {
  const result = []
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result
}


const mergeSort = (arr) => {
  const length = arr.length
  if (length < 2) {
    return arr
  }
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const result = mergeSort(arr)
console.log(result);


// 归并排序

// 通过递归将数组划分为二等分，当数组长度小于2即停止划分
// 通过while循环去对比两个的数组的第一项
// 如果前者小于等于后者，则通过shift去推出前者第一项，然后push到数组
// 如果前者大于后者，则通过shift去推出后者第一项，然后push到数组