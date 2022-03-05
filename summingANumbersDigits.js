// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  if (number < 0) number = Math.abs(number);
  let sum = 0;
  for (let i = 0; i < String(number).length; i++) {
    sum += +String(number)[i];
  }
  return sum;
}
