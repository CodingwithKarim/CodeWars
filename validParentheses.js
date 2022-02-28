// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    let arr = []
    let map = {
      '(': ')'
    }
    for(let i = 0; i < parens.length; i++){
      if(map.hasOwnProperty(parens[i])){
        arr.push(parens[i])
      }
      else if(!map.hasOwnProperty(arr[arr.length - 1])){
        return false
      }
      else{
        arr.pop()
      }
    }
    return arr.length === 0
  }