function minValue(values){
    return Number(values.sort((a,b)=> a - b).
    filter((num, index) => values.indexOf(num) === index).join(''))
    }

    // Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

