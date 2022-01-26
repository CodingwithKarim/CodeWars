// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

// Examples:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

var howManyYears = function (date1, date2) {
  return Math.abs(+date1.slice(0, 4) - +date2.slice(0, 4));
};
