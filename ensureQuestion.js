function ensureQuestion(s) {
  let newString = s.concat("?");
  if (s.includes("?")) {
    return s;
  } else {
    return newString;
  }
}
//make object that is paramater concated with question mark
//if param has '?', it returns the paramter value
//else the nestring is returned the object with the concated '?' is returned
