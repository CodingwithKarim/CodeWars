var capitals = function (word) {
    let arr = []
  for(let i = 0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase()){
      arr.push(word.indexOf(word[i]))
      
    }
  }
    return arr
  };

//   Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );