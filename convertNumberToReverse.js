function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]