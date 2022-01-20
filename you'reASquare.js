var isSquare = function(n){
    let num = Math.sqrt(n)
    return num === Math.floor(num) ? true : false
    }

    // Given an integral number, determine if it's a square number:
//     -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false