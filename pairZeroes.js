// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

// Examples
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

function pairZeros(arr) {
  let result = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      result.push(arr[i]);
    } else {
      counter++;
      if (counter != 2) {
        result.push(arr[i]);
      } else {
        counter = 0;
      }
    }
  }
  return result;
}
