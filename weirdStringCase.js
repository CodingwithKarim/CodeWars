// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    let str = "";
    for (let j = 0; j < string[i].length; j++) {
      if (j % 2 === 0) {
        str += string[i][j].toUpperCase();
      } else {
        str += string[i][j].toLowerCase();
      }
    }
    string[i] = str;
  }
  return string.join(" ");
}
