// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = (s) => {
  s = s.split(" ");
  let result = [];
  for (let i = 1; i < s.length + 1; i++) {
    if (s[i] != s[i - 1]) {
      result.push(s[i - 1]);
    }
  }
  return result.join(" ");
};
