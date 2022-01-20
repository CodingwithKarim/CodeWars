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

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"
