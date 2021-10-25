function rentalCarCost(d) {
  let sum = 40 * d;
  if (d >= 3 && d < 7) {
    return (sum -= 20);
  } else if (d >= 7) {
    return (sum -= 50);
  } else {
    return sum;
  }
}
