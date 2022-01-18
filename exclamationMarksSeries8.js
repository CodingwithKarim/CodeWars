// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove(string) {
  let result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] != "!") {
      break;
    } else {
      result.push(string[i]);
    }
  }
  for (let j = string.length - result.length - 1; j >= 0; j--) {
    if (string[j] === "!") {
      result.push(string[j]);
    } else {
      result.unshift(string[j]);
    }
  }
  return result.join("");
}
