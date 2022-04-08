const isBinarySearchTree = (root) => {
  // todo
  const path = [];
  getTraveralPath(root, path);
  console.log(path);
  for (let i = 0; i < path.length - 1; i++) {
    if (path[i].val > path[i+1].val) return false;
  }
  return true;
};

const getTraveralPath = (root, path) => {
  if (root === null) return;
  
  getTraveralPath(root.left, path);
  path.push(root);
  getTraveralPath(root.right, path);  
}