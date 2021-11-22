function repeatStr(n, s) {
  let x = [];
  for (let i = 0; i < n; i++) {
    x.push(s);
  }
  return x.join("");
}

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
