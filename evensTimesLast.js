function evenLast(numbers) {
    let filter = numbers.filter((e,index)=> index % 2 ==0)
    let reduce = null
    for(let sum of filter ){
       reduce += sum
    }
    return numbers.length > 0 ? reduce * numbers[numbers.length - 1] : 0
      
    }

    // Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

    // Indices in sequence start from 0.
    
    // If the sequence is empty, you should return 0.