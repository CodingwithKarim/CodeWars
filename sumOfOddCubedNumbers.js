function cubeOdd(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != typeof i) {
      return undefined;
    } else if (arr[i] % 2 != 0) {
      newArr.push(Math.pow(arr[i], 3));
    }
  }
  return newArr.reduce((a, b) => a + b, 0);
}

//   Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
