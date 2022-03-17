const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  let count = 0;
  if (root.val === target) count += 1;
  const countLeft = treeValueCount(root.left, target);
  const countRight = treeValueCount(root.right, target);
  return count + countLeft + countRight;
};
