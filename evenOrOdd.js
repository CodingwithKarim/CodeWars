function even_or_odd(number) {
  let num = parseInt(number);
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//param parsed to Int variable, if varible remainder is 0 if divided by 2 we return even else we return false
