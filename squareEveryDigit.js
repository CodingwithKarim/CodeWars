function squareDigits(num) {
  let digits = num.toString().split("");
  let x = digits.map((x) => x * x).join("");
  return Number(x);
}
