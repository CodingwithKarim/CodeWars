// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let newStr = str.split(" ");
  return newStr
    .map(function (word) {
      word += word[0];
      const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      return word.search(regex) === -1 ? word.slice(1) + "ay" : word.slice(1);
    })
    .join(" ");
}
