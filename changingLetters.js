// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  let result = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
