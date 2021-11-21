const arr = [2, 1, 33, 44, 5, 11, 199, 123]

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

const result = quickSort(arr)
console.log(result);

// 原理
// 通过取数组的中间数字，然后循环数组对比值与中间数字的大小，划分为左右两个数组
// 通过递归的方式继续将划分的数组接着排序
// 最终将数组合并