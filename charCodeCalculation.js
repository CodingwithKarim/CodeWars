// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    let result = ''
    for(let i = 0; i < x.length; i++){
      result += x[i].charCodeAt(0)
    }
     let newResult = ''
     for(let j = 0; j < result.length; j++){
       if(result[j] === '7'){
         newResult += 1
       }
       else{
         newResult += result[j]
       }
     }
      let finalResult = 0
      for(let x = 0; x < result.length; x++){
        finalResult += newResult[x] - result[x]
      }
      return Math.abs(finalResult)
      // what type of question smh
    }