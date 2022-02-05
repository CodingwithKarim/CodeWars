// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
  let i = 0,
    leftSum = 0,
    rightSum = 0;
  while (left[i] || right[i]) {
    if (left[i] && right[i]) {
      left[i] === "!" ? (leftSum += 2) : (leftSum += 3);
      right[i] === "!" ? (rightSum += 2) : (rightSum += 3);
      i++;
      continue;
    }
    if (!left[i]) {
      right[i] === "!" ? (rightSum += 2) : (rightSum += 3);
    }
    if (!right[i]) {
      left[i] === "!" ? (leftSum += 2) : (leftSum += 3);
    }
    i++;
  }
  return leftSum > rightSum ? "Left" : rightSum > leftSum ? "Right" : "Balance";
}
