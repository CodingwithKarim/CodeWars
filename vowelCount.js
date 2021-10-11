function getCount(str) {
  let vowelsCount = 0;
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
// param of str, counter start at 0, for loop with i being each letter of str
//if i shares same value as as any vowel, vowelsCount goes up by 1
//the vowelsCount returns number of letters that were truthy in the string
