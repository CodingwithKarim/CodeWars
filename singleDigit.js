// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:

// 5665 --> (binary) 1011000100001
// 1011000100001 --> (sum of binary digits) 5

function singleDigit(n) {
  if (n < 10) {
    return n;
  } else {
    n = [...n.toString(2)].map(Number).reduce((a, b) => a + b, 0);
    return singleDigit(n);
  }
}
