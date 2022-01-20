function largest(n, xs) {
  let newarr = [];
  let arr = xs.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    newarr.push(arr[i]);
  }
  return newarr.reverse();
}

//   Write a program that outputs the top n elements from a list.
