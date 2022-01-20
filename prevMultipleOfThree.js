// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

const prevMultOfThree = (n) => {
  let arr = String(n).split("").map(Number);
  for (let i = 0; i < n; i++) {
    if (Number(arr.join("")) === 0 || Number(arr.join("")) === 1) {
      return null;
    } else if (Number(arr.join("")) % 3 === 0) {
      return Number(arr.join(""));
    } else {
      arr.splice(arr.length - 1);
    }
  }
};
