const arr = [100, 21, 23, 111, 41, 543, 12, 55, 123, 54]

// const bubbleSort = arr => {

//   const length = arr.length

//   for (let i = 0; i < length; i++) {

//     for (let j = 0; j < length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
// }

// bubbleSort(arr)
// console.log(arr);

// const selectSort = arr => {

//   const length = arr.length

//   for (let i = 0; i < length; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j
//       }
//     }
//     if (minIndex !== i) {
//       const temp = arr[i]
//       arr[i] = arr[minIndex]
//       arr[minIndex] = temp
//     }
//   }
// }

// selectSort(arr)
// console.log(arr);

// const insertSort = arr => {
//   let i, j
//   for (i = 0; i < arr.length; i++) {
//     const value = arr[i]
//     for (j = i - 1; j > -1 && arr[j] > value; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = value
//   }
// }

// insertSort(arr)
// console.log(arr);

// const merge = (left = [], right = []) => {
//   const result = []

//   while(left.length && right.length) {
//     if (left[0] > right[0]) {
//       result.push(right.shift())
//     } else {
//       result.push(left.shift())
//     }
//   }

//   while(left.length) {
//     result.push(left.shift())
//   }

//   while(right.length) {
//     result.push(right.shift())
//   }
//   return result
// }

// const mergeSort = arr => {
//   const length = arr.length
//   if (length < 2) {
//     return arr
//   }

//   const middle = Math.floor(length / 2)
//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)

//   return merge(mergeSort(left), mergeSort(right))
// }

// const result = mergeSort(arr)
// console.log(result);

const quickSort = arr => {
  if (arr.length < 2) {
    return arr
  }

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

const result = quickSort(arr)
console.log(result);
