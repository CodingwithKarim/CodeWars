// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

function makePassword(phrase) {
  phrase = phrase.split(" ");
  let password = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i][0].toLowerCase() === "i") {
      password += 1;
      continue;
    } else if (phrase[i][0].toLowerCase() === "o") {
      password += 0;
      continue;
    } else if (phrase[i][0].toLowerCase() === "s") {
      password += 5;
      continue;
    } else {
      password += phrase[i][0];
      continue;
    }
  }
  return password;
}
