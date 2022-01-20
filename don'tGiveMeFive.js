function dontGiveMeFive(start, end){
    let arr = []
   for(let i = start; i <= end; i++){
     if(!i.toString().includes(5)){
       arr.push(i)
       }
   }
    return arr.length
  }

  //In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

  //1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12