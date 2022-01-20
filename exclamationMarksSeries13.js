// Count the number of exclamation marks and question marks, return the product.

// Examples
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20

function product(string) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "!") {
      x++;
    } else if (string[i] === "?") {
      y++;
    }
  }
  return x * y;
}
