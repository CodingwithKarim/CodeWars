function squareSum(numbers){
    return numbers.map(x => {
      return x*x
    }).reduce((a,b) => {
      return a + b
    },0)
    }

    // Complete the square sum function so that it squares each number passed into it and then sums the results together.

    // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.