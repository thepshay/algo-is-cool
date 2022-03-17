// const treeLevels = (root) => {
//   // todo
//   if (root === null) return [];
//   const result = [];
//   const data = {node: root, level:0}
//   const stack = [data];
//   while (stack.length > 0) {
//     const currData = stack.pop();
//     if (currData.node.right !== null) {
//       const newData = {
//         node: currData.node.right,
//         level: currData.level+1
//       }
//       stack.push(newData);
//     }
//     if (currData.node.left !== null) {
//       const newData = {
//         node: currData.node.left,
//         level: currData.level+1
//       }
//       stack.push(newData);
//     }
//     if (result[currData.level] === undefined) result.push([]);
//     result[currData.level].push(currData.node.val);
//   }
//   return result;
// };

const treeLevels = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels;
}

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;
  
  if (levels.length === levelNum) {
    levels.push([ root.val ]);
  } else {
    levels[levelNum].push(root.val);
  }
  fillLevels(root.left, levels, levelNum+1);
  fillLevels(root.right, levels, levelNum+1);
}