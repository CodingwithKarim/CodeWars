// Description:
// Remove all exclamation marks from sentence except at the end.

// Examples
// remove("Hi!") == "Hi!"
// remove("Hi!!!") == "Hi!!!"
// remove("!Hi") == "Hi"
// remove("!Hi!") == "Hi!"
// remove("Hi! Hi!") == "Hi Hi!"
// remove("Hi") == "Hi"

function remove(string) {
  let exclamation = "";
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "!") {
      exclamation += "!";
    } else {
      break;
    }
  }
  for (let j = 0; j < string.length - exclamation.length; j++) {
    if (string[j] != "!") {
      str += string[j];
    }
  }
  return str + exclamation;
}
