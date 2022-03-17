const leafList = (root) => {
  // todo
  if (root === null) return [];
  const leaf = [];
  const queue = [root];
  while (queue.length > 0) {
    const currNode = queue.pop();
    if (currNode.left === null && currNode.right === null) leaf.push(currNode.val);
    if (currNode.right !== null) queue.push(currNode.right);
    if (currNode.left !== null) queue.push(currNode.left);
  }
  return leaf;
};