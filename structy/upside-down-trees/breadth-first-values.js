const breadthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode.left !== null) queue.push(currNode.left);
    if (currNode.right !== null) queue.push(currNode.right);
    result.push(currNode.val);
  }
  return result;
};