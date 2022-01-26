// // Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// productArray ({12,20}) ==>  return {20,12}

function productArray(numbers) {
  let result = [];
  let sum = 1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j != i) {
        sum *= numbers[j];
      }
    }
    result.push(sum);
    sum = 1;
  }
  return result;
}
