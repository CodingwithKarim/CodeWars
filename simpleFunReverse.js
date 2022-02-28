// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  let result = "";
  let j = str.length - 1;
  while (str[j]) {
    if (str[j].toUpperCase() !== str[j]) {
      result += str[j];
    }
    j--;
  }
  return result;
}
