// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312"); // => "333122"
// explode("102269"); // => "12222666666999999999"

function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < +s[i]; j++) {
      result += s[i];
    }
  }
  return result;
}
