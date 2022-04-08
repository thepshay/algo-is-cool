const buildTreeInPre = (inOrder, preOrder) => {
  // todo
  if (inOrder.length === 0) return null;
  if (inOrder.length === 1) return new Node(preOrder[0]);
  const val = preOrder[0];
  const root = new Node(val);
  const index = inOrder.indexOf(val);
  
  const inOrderLeft = inOrder.slice(0, index);
  const inOrderRight = inOrder.slice(index+1);
  
  const preOrderLeft = preOrder.slice(1, index+1);
  const preOrderRight = preOrder.slice(index+1);
  root.left = buildTreeInPre(inOrderLeft, preOrderLeft);
  root.right = buildTreeInPre(inOrderRight, preOrderRight);
  
  return root;
  
};