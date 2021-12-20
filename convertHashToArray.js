// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically.

// Good Luck!

function convertHashToArray(hash) {
  let arr = [];
  for (let obj in hash) {
    arr.push([obj, hash[obj]]);
  }
  return arr.sort();
}
