function repeats(arr) {
  return arr
    .filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))
    .reduce((x, y) => x + y);
}
//return arr.filter which checks to see if first index and last index of x have the same value
//it returns only elements which equate to true and reduces the array to add the two values
