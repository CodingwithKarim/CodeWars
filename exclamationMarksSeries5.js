// Remove all exclamation marks from the end of words. Words are separated by a single space.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove(string) {
  string = string.split(" ");
  return string
    .map(function (word) {
      let j = word.length - 1;
      while (word[j] === "!") {
        j--;
      }
      return word.substring(0, j + 1);
    })
    .join(" ");
}
