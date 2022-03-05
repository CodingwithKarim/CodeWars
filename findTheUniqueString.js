// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.

function findUniq(arr) {
  let reference = null;
  let array = arr.map(function (word) {
    word = [...new Set(word.toLowerCase())].join("");
    return word
      .split("")
      .filter((char) => char != " ")
      .sort((a, b) => a > b)
      .join("");
  });
  if (array[0] === array[array.length - 1]) {
    reference = array[0];
  } else {
    reference = array[1];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] != reference) {
      return arr[i];
    }
  }
}
