function invert(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] / -1);
  }
  return arr;
}
//new array, loop for index, push array[i] / -1 which will turn positive integer to negative & negative to positive
