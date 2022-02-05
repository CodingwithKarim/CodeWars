// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

function balancedNum(number) {
  if (number < 100) {
    return "Balanced";
  }
  number = String(number).split("").map(Number);
  if (number.length % 2 != 0) {
    let middle = Math.floor(number.length / 2);
    let left = number.slice(0, middle).reduce((a, b) => a + b, 0);
    let right = number.slice(middle + 1).reduce((a, b) => a + b, 0);
    if (left === right) {
      return "Balanced";
    } else {
      return "Not Balanced";
    }
  } else {
    let middle = Math.floor(number.length / 2);
    let left = number.slice(0, middle - 1).reduce((a, b) => a + b, 0);
    let right = number.slice(middle + 1).reduce((a, b) => a + b, 0);
    if (left === right) {
      return "Balanced";
    } else {
      return "Not Balanced";
    }
  }
}
