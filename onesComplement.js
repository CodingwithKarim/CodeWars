// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

function onesComplement(n) {
    let result = ''
    let map = {
      '0':1,
      '1':0
    }
    n = String(n)
    for(let num of n){
      result += map[num]
    }
    return result
  };