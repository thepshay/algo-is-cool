// const leftyNodes = (root) => {
//   // todo
//   if (root === null) return [];
//   const lefties = [];
//   const stack = [{node: root, layer: 0}]; 
  
//   while (stack.length > 0) {
//     const currData = stack.pop();
//     const currNode = currData.node;
//     const currLayer = currData.layer;
//     if (lefties[currLayer] === undefined) lefties.push(currNode.val);
    
//     if (currNode.right !== null) stack.push( { node: currNode.right, layer: currLayer + 1});
//     if (currNode.left !== null) stack.push( {node: currNode.left, layer: currLayer + 1});
//   }
//   return lefties;
// };

const leftyNodes = (root) => {
  const values = [];
  traverse(root, 0, values);
  return values;
}

const traverse = (root, level, values) => {
  if (root === null) return;
  
  if (values.length === level) {
    values.push(root.val);
  }
  
  traverse(root.left, level+1, values);
  traverse(root.right, level+1, values);
}