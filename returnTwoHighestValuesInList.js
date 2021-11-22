function twoHighest(arr) {
    let sorted = arr.sort((a,b)=> b - a)
    let distinct = [...new Set(sorted)]
    return distinct.length > 0 ? [distinct[0], distinct[1]].filter(Boolean) : []
      }

    //   In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

    //   The result should also be ordered from highest to lowest.
      
    //   Examples:
      
    //   [4, 10, 10, 9]  =>  [10, 9]
    //   [1, 1, 1]  =>  [1]
    //   []  =>  []