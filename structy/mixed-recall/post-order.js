const postOrder = (root) => {
  // todo
  const path = [];
  postOrderTraversal(root, path);
  return path.map(node => node.val);
};

const postOrderTraversal = (root, path) => {
  if (root === null) return;
  
  postOrderTraversal(root.left, path);
  postOrderTraversal(root.right, path);
  path.push(root);
}