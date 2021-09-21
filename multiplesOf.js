function solution(number){
  let sum = 0;
 for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }}
   return sum;
};
//func solution with number param
//let sum be 0
//for loop starting at 0 plus 1 everly loop as long as its < number value
//if i divisibly by 3 or 5, we add the value of i into sum
//after loop is done we return sum 