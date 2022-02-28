// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  let map = {};
  for (let letter of test) {
    if (!map.hasOwnProperty(letter)) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  for (let letter of original) {
    if (!map.hasOwnProperty(letter)) {
      return false;
    } else {
      map[letter]--;
    }
  }
  return Math.max(...Object.values(map)) === Math.min(...Object.values(map));
};
