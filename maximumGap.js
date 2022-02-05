// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)

function maxGap(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < numbers.length; i++) {
    let gap = Math.abs(numbers[i] - numbers[i - 1]);
    max = Math.max(max, gap);
  }
  return max;
}
