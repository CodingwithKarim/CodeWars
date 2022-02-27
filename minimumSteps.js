// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);
  let sum = numbers[0];
  let steps = 0;
  while (sum < value) {
    steps++;
    sum += numbers[steps];
  }
  return steps;
}
