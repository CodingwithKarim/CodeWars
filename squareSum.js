function squareSum(numbers){
    return numbers.map(x => {
      return x*x
    }).reduce((a,b) => {
      return a + b
    },0)
    }