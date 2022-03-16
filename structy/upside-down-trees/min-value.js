const treeMinValue = (root) => {
  // todo
  if (root === null) return Infinity;
  const min = root.val;
  return Math.min(min, treeMinValue(root.left), treeMinValue(root.right))
};