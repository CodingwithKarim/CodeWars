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
