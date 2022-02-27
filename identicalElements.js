// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

function duplicateElements(m, n) {
  let set = new Set();
  for (let i = 0; i < m.length; i++) {
    if (!set.has(m[i])) {
      set.add(m[i]);
    }
  }
  for (let j = 0; j < n.length; j++) {
    if (set.has(n[j])) {
      return true;
    }
  }
  return false;
}
