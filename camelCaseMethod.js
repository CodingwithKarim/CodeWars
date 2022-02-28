// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  let str = "";
  let j = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === " ") {
      j = 0;
      continue;
    }
    if (j === 0) {
      str += this[i].toUpperCase();
    } else {
      str += this[i];
    }
    j++;
  }
  return str;
};
