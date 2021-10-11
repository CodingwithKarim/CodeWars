function checkExam(array1, array2) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      sum += 4;
    } else if (array2[i] === "") {
      sum + 0;
    } else if (array1[i] !== array2[i]) {
      sum -= 1;
    }
  }
  if (sum < 0) {
    return 0;
  } else {
    return sum;
  }
}
