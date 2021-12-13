// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2

function getDecimal(n){
    return n > 0 ? n - Math.floor(n) :  (n + Math.floor(n * -1)) * -1
    }