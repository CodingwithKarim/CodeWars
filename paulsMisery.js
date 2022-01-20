// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

function paul(x) {
  let sum = x.reduce(function (a, b) {
    if (a === "life") {
      a = 0;
    } else if (a === "Petes kata") {
      a = 10;
    } else if (a === "eating") {
      a = 1;
    } else if (a === "kata") {
      a = 5;
    }
    if (b === "life") {
      b = 0;
    } else if (b === "Petes kata") {
      b = 10;
    } else if (b === "eating") {
      b = 1;
    } else if (b === "kata") {
      b = 5;
    }
    return a + b;
  }, 0);
  if (sum < 40) {
    return "Super happy!";
  } else if (sum >= 40 && sum < 70) {
    return "Happy!";
  } else if (sum >= 70 && sum < 100) {
    return "Sad!";
  } else {
    return "Miserable!";
  }
}
