// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result +=
      s[i].toLowerCase() != s[i] ? s[i].toLowerCase() : s[i].toUpperCase();
  }
  return result;
}
