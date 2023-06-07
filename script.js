function merge (arrayOne, arrayTwo) {
    if (arrayTwo === undefined) {
      return arrayOne
    }
    
    let newArr = []
    let m = arrayOne.length - 1
    let n = arrayTwo.length - 1
    let i = 0;
    let j = 0;
    let k = 0;
    
    while (i <= m && j <= n) {
     if (arrayOne[i] < arrayTwo[j]) {
       newArr[k++] = arrayOne[i++]
     } else {
       newArr[k++] = arrayTwo[j++]
     }
    }
    for (; i <= m; i++) {
      newArr[k++] = arrayOne[i]
    }
    for (; j <= n; j++) {
      newArr[k++] = arrayTwo[j]
    }
    console.log('new array', newArr)
    return newArr
  }
  

function mergeSort(arr) {
    let low = 0
    let high = arr.length - 1
    let middle = Math.ceil(arr.length / 2)
    if (low === high) return arr
    if (low < high) { 
    let leftHalf = arr.splice(0, middle)
    let rightHalf = arr.splice(-middle)
    console.log(leftHalf, rightHalf)
    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
    }
  } 
  
  let arr = [1, 4, 3, 4, 20, 6, 2, 8, 18, 10, 11]
  
  // mergeSort(arr)
  console.log(mergeSort(arr))
  
  
  
  