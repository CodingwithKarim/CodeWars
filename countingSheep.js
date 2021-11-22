function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (const e in arrayOfSheep) {
    if (arrayOfSheep[e] == true) {
      counter += 1;
    }
  }
  return counter;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.