// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  const regex = /^[a-z]+$/i;
  let s1Sum = 0;
  let s2Sum = 0;
  if (s1 != null) {
    for (let str of s1) {
      if (!str.match(regex)) {
        s1Sum = 0;
        break;
      } else {
        s1Sum += str.toUpperCase().charCodeAt(0);
      }
    }
  }
  if (s2 != null) {
    for (let str2 of s2) {
      if (!str2.match(regex)) {
        s2Sum = 0;
        break;
      } else {
        s2Sum += str2.toUpperCase().charCodeAt(0);
      }
    }
  }
  return s1Sum === s2Sum;
}
