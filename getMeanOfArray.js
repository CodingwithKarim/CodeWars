function getAverage(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);
}
//for loop to target index values
//loop runs adding a new index value depending on elements in array
//each time it loops the array[i] index value is added to the total value
//once loop ends, total / marks.length to get average and pass it into Math floor to round down to nearest integer.
