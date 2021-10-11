String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    })
    .join(" ");
};
//returns another method that returns argument split by each space in map array
//with each element isolated, we can replace() the 0 index of word to uppercase
//join takes the elements from the map array and returns a concat string
//this.split => the global object in our function
