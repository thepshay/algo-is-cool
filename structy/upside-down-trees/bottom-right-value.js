const bottomRightValue = (root) => {
  // todo
  const queue = [root];
  let currNode;
  while (queue.length > 0) {
    currNode = queue.shift();
    if (currNode.left !== null) queue.push(currNode.left);
    if (currNode.right !== null) queue.push(currNode.right);
  }
  return currNode.val;
};