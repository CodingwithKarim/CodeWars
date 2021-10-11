function multipleOfIndex(array) {
  return array.filter((check, i) => check % i == 0);
}
//filter method is used with check as element and i has index
//if check % by the index === 0, it equates to true and is included in the array
