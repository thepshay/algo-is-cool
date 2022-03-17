// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
  // todo
  if (root === null) return [];
  const levelInfo = {};
  const stack = [{node:root, level: 0}]
  while(stack.length > 0) {
    const currData = stack.pop();
    const currNode = currData.node;
    const currLevel = currData.level;
    
    if (levelInfo[currLevel] === undefined) {
      levelInfo[currLevel] = {
        sum: currNode.val,
        count: 1,
      }
    } else {
      levelInfo[currLevel].sum += currNode.val;
      levelInfo[currLevel].count += 1;
    }
    
    if (currNode.left !== null) {
      stack.push({node: currNode.left, level: currLevel+1})
    }
    if (currNode.right !== null) {
      stack.push({node: currNode.right, level: currLevel+1})
    }
  }
  let i = 0;
  const result = [];
  while ( levelInfo[i] !== undefined) {
    const avg = levelInfo[i].sum / levelInfo[i].count;
    result.push(avg)
    i++;
  }
  return result;
};

















module.exports = {
  levelAverages
};