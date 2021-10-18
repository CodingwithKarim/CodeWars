function feast(beast, dish) {
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}
//function that checks if first index and last index of both param are requal
//returns either true or false
