function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (const e in arrayOfSheep) {
    if (arrayOfSheep[e] == true) {
      counter += 1;
    }
  }
  return counter;
}
