// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  if (val1 === val2) return val1;
  const val1Path = findPath(root, val1).reverse();
  const val2Path = findPath(root, val2).reverse();
  
  let i = 0;
  while (val1Path[i] === val2Path[i]) {
    i++;
  }
  return val1Path[i-1];
};

const findPath = (root, value) => {
  if (root === null) return null;
  if (root.val === value) return [value];
  
  const leftPath = findPath(root.left, value);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  
  const rightPath = findPath(root.right, value);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  
  return null;
}
