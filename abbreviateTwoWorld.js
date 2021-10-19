function abbrevName(name) {
  return name.split(" ").reduce((a, b) => {
    return a[0].toUpperCase() + "." + b[0].toUpperCase();
  });
}
