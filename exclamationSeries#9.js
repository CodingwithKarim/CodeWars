// Description:
// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

// Examples
// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

function removeOrAdd(string) {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    let last = string[i].length - 1;
    let count = 0;
    while (string[i][last] === "!") {
      count++;
      last--;
    }
    count === 0
      ? (string[i] += "!")
      : count === 1
      ? (string[i] = string[i].substring(0, string[i].length - 1))
      : (string[i] += "");
  }
  return string.join(" ");
}
