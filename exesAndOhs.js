function XO(str) {
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o" || str[i] === "O") {
      counter1++;
    } else if (str[i] === "x" || str[i] === "X") {
      counter2++;
    }
  }
  if (counter1 === counter2) {
    return true;
  } else {
    return false;
  }
}
