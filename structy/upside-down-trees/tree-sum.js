// const treeSum = (root) => {
//   // todo
//   if (root === null) return 0;
//   let sum = 0;
//   let stack = [root];
//   while (stack.length > 0) {
//     const currNode = stack.pop();
//     if (currNode.left !== null) stack.push(currNode.left);
//     if (currNode.right !== null) stack.push(currNode.right);
//     sum += currNode.val;
//   }
//   return sum;
// };

const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}