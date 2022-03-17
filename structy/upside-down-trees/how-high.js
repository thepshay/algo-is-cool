const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right))
};