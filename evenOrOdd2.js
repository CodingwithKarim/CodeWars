function evenOrOdd(str) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) % 2 === 0 || Number(str[i]) === 2) {
      sum1 += Number(str[i]);
    } else {
      sum2 += Number(str[i]);
    }
  }
  if (sum1 > sum2) {
    return `Even is greater than Odd`;
  } else if (sum1 === sum2) {
    return `Even and Odd are the same`;
  } else if (sum1 < sum2) {
    return `Odd is greater than Even`;
  }
}
