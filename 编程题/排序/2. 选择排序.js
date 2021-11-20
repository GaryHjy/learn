const arr = [10, 3, 3, 4, 1, 66, 19, 11, 43, 12]


const selectionSort = (arr) => {
  const arrLength = arr.length
  let minIndex
  for (let i = 0; i < arrLength; i++) {
    minIndex = i
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minIndex]) {
        // 记录最小值的index
        minIndex = j
      }
    }
    if (minIndex !== i) {
      // 置换位置
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
}

selectionSort(arr)

console.log(arr);

// 选择排序
// 两个for循环，外层表示循环次数，内层循环起点在外层循环的下标基础+1表示起点，循环至尾部
// 通过查找最小值，然后交换位置