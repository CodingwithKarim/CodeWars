function divCon(x){
    return x.filter(num => typeof num === 'number').reduce((a,b)=> a + b,0) -
      x.filter(num => typeof num === 'string').map(Number).reduce((a,b)=> a + b,0)
      
    }

//     Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.