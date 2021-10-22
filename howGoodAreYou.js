function betterThanAverage(classPoints, yourPoints) {
  return yourPoints >
    (classPoints.reduce((a, b) => {
      return a + b;
    }) +
      yourPoints) /
      (classPoints.length + 1)
    ? true
    : false;
}
