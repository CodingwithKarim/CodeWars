function countPositivesSumNegatives(input) {
  let sum1 = 0;
  let sum2 = 0;
  let arr = [];
  let arr1 = [];
  let counter = 0;

  for (const e in input) {
    if (input[e] > 0) {
      counter++;
    } else if (input[e] < 0) {
      sum2 += input[e];
    }
  }
  arr[0] = counter;
  arr[1] = sum2;
  if (arr[0] === 0 && arr[1] === 0) {
    return arr1;
  }
  return arr;
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
