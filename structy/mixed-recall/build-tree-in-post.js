const buildTreeInPost = (inOrder, postOrder) => {
  // todo
  if (inOrder.length === 0) return null;
  if (inOrder.length === 1) return new Node(inOrder[0]);
  
  const root = new Node(postOrder[postOrder.length-1]);
  console.log(inOrder)
  const rootIndex = inOrder.indexOf(postOrder[postOrder.length-1]);
  const inOrderLeft = inOrder.slice(0, rootIndex);
  const inOrderRight = inOrder.slice(rootIndex+1);
  
  const postOrderLeft = postOrder.slice(0, rootIndex);
  const postOrderRight = postOrder.slice(rootIndex, postOrder.length-1);
  
  root.left = buildTreeInPost(inOrderLeft, postOrderLeft);
  root.right = buildTreeInPost(inOrderRight, postOrderRight);
  return root;
};