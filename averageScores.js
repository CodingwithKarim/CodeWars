function average(scores) {
  let x = Math.round(scores.reduce((a, b) => a + b) / scores.length);
  return x;
}
//using reduce to add values and divide by length saved to a var x
