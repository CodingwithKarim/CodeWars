function isPalindrome(str) {
  str = str.toLowerCase();
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] != str[str.length - (i + 1)]) return false;
  }
  return true;
}

// Write a function that checks if a given string (case insensitive) is a palindrome.
