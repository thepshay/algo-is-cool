const maxPathSum = (root) => {
  // todo
  if (root === null) return -Infinity;
  if (root.left === null && root.right===null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
};