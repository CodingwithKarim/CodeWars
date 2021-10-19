function doubleChar(str) {
  return str
    .split("")
    .map((x) => {
      return x + x;
    })
    .join("");
}
