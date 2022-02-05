// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

// Notes:
// Words are separated with spaces
// Each word will include at least 1 letter
// There will be no exclamation marks in the middle of a word
// Examples
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"

function remove(s) {
  s = s.split(" ");
  return s
    .map(function (str) {
      let left = 0;
      while (str[left] === "!") {
        left++;
      }
      let right = str.length - 1;
      while (str[right] === "!") {
        right--;
      }
      right = str.length - 1 - right;
      if (left >= right) {
        return str.substring(left - right);
      } else {
        return str.substring(0, str.length - (right - left));
      }
    })
    .join(" ");
}
