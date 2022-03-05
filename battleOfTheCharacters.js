// Description:
// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("One", "Two"); // => "Two"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
  let i = 0,
    j = 0,
    xSum = 0,
    ySum = 0;
  while (i < x.length || j < y.length) {
    if (x[i] && y[j]) {
      if (x[i].toLowerCase() === x[i]) {
        xSum += (x[i].charCodeAt(0) - 96) / 2;
      } else {
        xSum += x[i].charCodeAt(0) - 64;
      }
      if (y[j].toLowerCase() === y[j]) {
        ySum += (y[j].charCodeAt(0) - 96) / 2;
      } else {
        ySum += y[j].charCodeAt(0) - 64;
      }
      i++;
      j++;
      continue;
    }
    if (!x[i]) {
      if (y[j].toLowerCase() === y[j]) {
        ySum += (y[j].charCodeAt(0) - 96) / 2;
      } else {
        ySum += y[j].charCodeAt(0) - 64;
      }
      j++;
      continue;
    }
    if (!y[j]) {
      if (x[i].toLowerCase() === x[i]) {
        xSum += (x[i].charCodeAt(0) - 96) / 2;
      } else {
        xSum += x[i].charCodeAt(0) - 64;
      }
      i++;
      continue;
    }
  }
  return xSum === ySum ? "Tie!" : xSum > ySum ? x : y;
}
