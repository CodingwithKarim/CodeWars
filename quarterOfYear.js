const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else if (month > 9 && month <= 12) {
    return 4;
  }
};
//if else statements comparing values between 1 and 12
