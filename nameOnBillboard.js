function billboard(name, price = 30){
  let sum = 0;
  for (let i = 1; i <= name.length; i++){
    sum += price;}
    return sum;
  };
  // sum variable set to 0 value, for loop which iterates and adds 1 to i until i has a value less than or equal to the length of the parameter
  //for each iteration of the loop, sum is increased by += price or number value 30
  //once the i <= name.length condition is fufilled, the value of sum is returned