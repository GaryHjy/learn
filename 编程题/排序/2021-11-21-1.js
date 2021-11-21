const arr = [2, 11,3, 44, 100, 33]


// const sort = (arr) => {
//   const length = arr.length
//   for(let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
// }

// const sort = (arr) => {
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


const sort = (arr) => {
  let i, j

  for (i = 0; i < arr.length; i++) {
    const value = arr[i]
    for (j = i - 1; i > -1 && arr[j] > value; j-- ) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
}


sort(arr)
console.log(arr);