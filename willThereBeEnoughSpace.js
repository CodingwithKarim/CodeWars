function enough(cap, on, wait) {
  return cap - on >= wait ? 0 : wait - (cap - on);
}
