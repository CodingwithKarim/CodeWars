// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for omitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

// Examples
// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// because:

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

function scoreTest(str, right, omit, wrong) {
  let correct = 0;
  let omitt = 0;
  let wrongg = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0) {
      correct++;
    } else if (str[i] === 1) {
      omitt++;
    } else {
      wrongg++;
    }
  }
  return correct * right + omitt * omit - wrong * wrongg;
}
