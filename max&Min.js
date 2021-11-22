var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

// Example
// max(1,2,3,4) //returns 4
// max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
// max(1,2,[3,4]) //returns 4
// max(1,2,[3,[4]]) //returns 4
// max(1,2,[3,['4r']]) //returns NaN
// max([[],[-4]]) // returns -4
// max() or max([]) //returns 0
// And so goes for min
