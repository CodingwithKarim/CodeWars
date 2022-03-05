// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  s = s.split(" ");
  let str = "";
  let set = new Set();
  for (let word of s) {
    if (!set.has(word)) {
      str += word + " ";
      set.add(word);
    }
  }
  return str.substring(0, str.length - 1);
}
