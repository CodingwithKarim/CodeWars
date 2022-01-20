// Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.

// For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].

// n/$n can be any integer greater than or equal to 0.

function generateIntegers(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
  }
  return result;
}
