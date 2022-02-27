// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

// Could you help him?

// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

function newAvg(arr, newavg) {
  let length = arr.length + 1;
  arr = arr.reduce((a, b) => a + b, 0);
  let donation = newavg * length - arr;
  if (donation > 0) {
    return Math.ceil(donation);
  } else {
    throw new Error();
  }
}
