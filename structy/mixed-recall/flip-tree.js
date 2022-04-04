// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const flipTree = (root) => {
  // todo
  if (root === null) return null;
  
  let tempLeft = root.left;
  root.left = flipTree(root.right);
  root.right = flipTree(tempLeft);
  return root;
};


// null return null
// left and right null, return root