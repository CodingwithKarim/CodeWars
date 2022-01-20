function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  return sum;
}

//index with for loop
//if param[i] greater than or equal to 0, the sum of param[i] is added to sum
// sum object is returned
