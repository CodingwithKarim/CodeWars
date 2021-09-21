function strCount(str, letter){  
  return str.split(letter).length - 1;
  }
  //the split method returns a new array that splits at the $letter value
  // a .length method is passed which returns the length of a string minus 1
  //-1 due to the second string always being a length of 1 due to the 2 parameters which will always spit out the split value 