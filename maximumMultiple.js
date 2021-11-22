function maxMultiple(divisor, bound){
    let arr = []
  for(let i = 0; i <= bound; i++ ){
    if(i % divisor === 0 && i <= bound && i > 0){
     arr.push(i)
    }
  }
    return arr[arr.length - 1]
  }

// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.