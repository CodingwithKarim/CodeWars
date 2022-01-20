function highAndLow(numbers) {
  let numList = numbers.split(" ");
  return Math.max(...numList) + " " + Math.min(...numList);
}
//create array and split the spaces to get rid of array whitespace accounting for elements
//spread operator creates a copy to allow Math.max and Math.min to return correct values
