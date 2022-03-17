const allTreePaths = (root) => {
  // todo
  if (root === null) return [];
  if (root.left === null && root.right===null) return [[root.val]];
  const leftPath = allTreePaths(root.left);
  const rightPath = allTreePaths(root.right);
  const combinedPath = leftPath.concat(rightPath);
  return combinedPath.map(ele => [root.val, ...ele])
};
