// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
  let result = "";
  let alph = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x).toLowerCase())
    .concat(
      Array.from(Array(10))
        .map((e, i) => i + 65)
        .map((x) => String.fromCharCode(x).toLowerCase())
    );
  let i = 0;
  while (i < s.length) {
    result += alph[alph.indexOf(s[i]) + 10];
    i++;
  }
  return result;
}
