function findMultiples(integer, limit) {
  const multiples = [];
   for (let i = 1; i <= limit; i++){
     if (integer * i <= limit){
     multiples.push(integer * i)}
 }
 return multiples;
 }
 
 //empty array 
 //for loop starting at i = 1 up until i is less than or equal to limit, for each iteration i value goes up by 1
 //if statement saying that if integer * 1 <= limit it truthy, push integer * 1 to an empty array multiples
 //will continue to loop until i <= limit condition is met
 // return pushed array