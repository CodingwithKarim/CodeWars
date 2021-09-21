function findOdd(A) {
  for (let i = 0; i < A.length; i++){
  let count = 0;
    for (let j = 0; j < A.length;j++){
      if (A[i] == A[j]){
        count++}
}if (count % 2 !==0){
    return A[i]}
  }
}
//we have a for loop with another inner for loop, the first loop sets up the index conditions for i
//set counter and inner for loop that uses a j variable as an index condition and compares same values between the A argument with the i and i
//if true count goes up by 1
// if statement isn't true for count, A[i] value is returned which is integer that appears an odd amount of times 