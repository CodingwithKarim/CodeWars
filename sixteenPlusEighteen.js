// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
  (num1 = String(num1).split("")), (num2 = String(num2).split(""));
  const small = num1.length > num2.length ? num2 : num1;
  const large = num1.length > num2.length ? num1 : num2;
  let result = [];
  for (let i = large.length - 1; i >= 0; i--) {
    if (small.length === 0) {
      result.unshift(+large[large.length - 1]);
      large.pop();
    } else {
      result.unshift(+large[large.length - 1] + +small[small.length - 1]);
      large.pop();
      small.pop();
    }
  }
  return +result.join("");
}
