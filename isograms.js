// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str) {
  let arr = str.split("").map((obj) => obj.toLowerCase());
  return [...new Set(arr)].length === str.length;
}
