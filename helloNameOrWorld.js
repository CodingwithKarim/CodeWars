function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }
  //tests to see if name paramater returns true, if not it returns `Hello World`
  //if name equates to true, first index of name is capitalized and the string is added to a
  //slice of the parameter that erases first letter is lowercased and added to the name[0].toUppercase