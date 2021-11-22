function sumOrProduct(array, n) {
    let sum = array.sort((a,b)=> b - a).slice(0, n).reduce((a,b)=> a + b)
    let product = array.sort((a,b)=> a - b).slice(0, n).reduce((a,b)=> a * b)
    return sum > product ? 'sum' : sum === product ? 'same' : 'product'
    }

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// Example
// sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"