const arr = [11, 1, 4, 9, 7, 6]

const bubbleSort = (arr) => {
  const arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - 1; j++) {
      console.log('before', arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
      console.log('after', arr[j], arr[j + 1]);
    }
  }
}

bubbleSort(arr)

console.log(arr);

// 冒泡排序
// 进行两个for循环，外层循环代表数组个数的长度次数（表示循环的次数），内层循环为数组长度-1，因为会取值下标+1
// 通过对比前后两个值的的大小，如果前者大于后者，则交换位置
// 每次循环的时候会将最大值放到最后位置，根据外层循环次数减少，不会影响到最后的最大值
// 每次都是会从头开始对比，找最大的值。一步一步向上冒泡