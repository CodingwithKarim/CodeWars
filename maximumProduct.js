function adjacentElementsProduct(array) {
    let arr = []
  for(let i = 0; i < array.length; i++){
    arr.push(array[i] * array[i + 1])
    
  }
    return arr.filter(Boolean).sort((a,b) => b - a).length > 0 ? arr.filter(Boolean).sort((a,b) => b - a)[0] : 0
  }

//   Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// adjacentElementsProduct([1, 2, 3]); ==> return 6