function add(n) {
  return function add1(x) {
    return n + x;
  };
}
//function with param of n returns another function with param x
//the second function returns both arguments added together
//once an add object is created with its argument, you can call the second funtion with its arg and it will return the arg value + the arg value in the add() object
