function arrayPlusArray(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return sum;
}
//concat the two strings than for loop each index of the array and add the value into sum for each iteration
//return sum
