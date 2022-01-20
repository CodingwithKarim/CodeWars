// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  const vowels = "aeiou",
    set = new Set(vowels);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!set.has(string[i])) {
      result += string[i];
    }
  }
  return result;
}
