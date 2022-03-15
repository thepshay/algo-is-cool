// const depthFirstValues = (root) => {
//   // todo
//   if (root === null) return [];
//   const stack = [root];
//   const res = [];
//   while (stack.length > 0) {
//     const currNode = stack.pop();
//     res.push(currNode.val)
//     if (currNode.right !== null) {
//       stack.push(currNode.right)
//     }
//     if (currNode.left !== null) {
//       stack.push(currNode.left)
//     }
//   }
//   return res;
// };

const depthFirstValues = (root) => {
  if (root === null) return [];
  let result = [root.val];
  if (root.left !== null) result = result.concat(depthFirstValues(root.left))
  if (root.right !== null) result = result.concat(depthFirstValues(root.right))
  return result;
}
