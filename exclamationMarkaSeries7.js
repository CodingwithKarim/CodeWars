// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(string) {
  let result = "";
  let counter = 0;
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    let str = "";
    for (let j = 0; j < string[i].length; j++) {
      if (string[i][j] === "!") {
        counter++;
        str += string[i][j];
      } else {
        str += string[i][j];
      }
    }
    if (counter != 1) {
      result += str + " ";
    }
    counter = 0;
  }
  return result.trim();
}
