function divisibleBy(numbers, divisor) {
  return numbers.filter((x) => {
    return x % divisor === 0;
  });
}
