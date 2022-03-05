// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

function solve(s) {
  let max = 0;
  let sum = 0;
  let vowels = "aeiou";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      sum++;
    } else {
      max = Math.max(sum, max);
      sum = 0;
    }
  }
  return max;
}
