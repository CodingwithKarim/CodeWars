function find_average(array) {
  if (array == "") {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg;
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.