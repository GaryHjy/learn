const arr = [51, 11, 66, 12, 111, 2, 1]


const insertSort = (arr) => {
  let i, j
  for (i = 0; i < arr.length; i++) {
    // 当前下标的值
    const value = arr[i]
    // 循环当前下标之前的值，进行置换
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
}

insertSort(arr)
console.log(arr);


// 插入排序
// 通过两个for循环，外层循环次数为数组长度，内层循环通过拿外层的下标往前循环
// 往前循环时通过对比当前循环的下标的前一个值与当前循环到的值作对比
// 如果当前的值比往前循环到的值小，则继续向前循环，并且会置换当前的值到当前的下标位置
// 如果当前的值比往前循环到的值大，则当前循环结束，当当前的值插入空位置