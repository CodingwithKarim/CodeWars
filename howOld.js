function calculateAge(x, y) {
  if (y - x === 1) {
    return `You are ${y - x} year old.`;
  } else if (x - y === 1) {
    return `You will be born in ${x - y} year.`;
  } else if (x < y) {
    return `You are ${y - x} years old.`;
  } else if (x > y) {
    return `You will be born in ${x - y} years.`;
  } else if (x === y) {
    return `You were born this very year!`;
  }
}
