const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target)
  if (result === null) return null;
  return result.reverse()
}

const pathFinderHelper = (root, target) => {
  // todo
  if (root === null) return null;
  if (root.val === target) return [target];
  let pathLeft = pathFinderHelper(root.left, target);
  if (pathLeft !== null) {
    pathLeft.push(root.val); 
    return pathLeft;
  }
  
  let pathRight = pathFinderHelper(root.right, target);
  if (pathRight !== null) {
    pathRight.push(root.val);
    return pathRight;
  };
  return null;
};