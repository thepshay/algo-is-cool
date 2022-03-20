// const islandCount = (grid) => {
//   // todo
//   let count = 0;
//   const visited = new Set();
//   const rowLength = grid.length;
//   const colLength = grid[0].length;
//   const directions = [[1,0], [-1,0], [0,1], [0,-1]];
  
//   for (let i = 0; i < rowLength; i++) {
//     for (let j = 0; j < colLength; j++) {
//       if (grid[i][j] === 'L' && !visited.has(`${i},${j}`)) {
//         count += 1;
//         searchIslandDFS(grid, [i, j], directions, visited); // dfs starting on currPos, add connecting L to visited
//       }
//     }
//   }
  
//   return count;
// };

// const searchIslandDFS = (grid, start, directions, visited) => {
//   const stack = [start];
  
//   while (stack.length > 0) {
//     console.log(stack)
//     const currPos = stack.pop();
//     visited.add(`${currPos[0]},${currPos[1]}`);
//     for (let dir of directions) {
//       const nextPos = [currPos[0] + dir[0], currPos[1] + dir[1]];
//       if (isValidPos(grid, nextPos) && grid[nextPos[0]][nextPos[1]] === 'L' && !visited.has(`${nextPos[0]},${nextPos[1]}`)) {
//         stack.push(nextPos);
//       }
//     }
//   }
//   return;
// }

// const isValidPos = (grid, pos) => {
//   const rowLength = grid.length;
//   const colLength = grid[0].length;
//   if (pos[0] < 0 || pos[0] > rowLength - 1) return false;
//   if (pos[1] < 0 || pos[1] > colLength - 1) return false;
//   return true;
// }

const islandCount = (grid) => {
  const visited = new Set();
  const directions = [[1,0], [-1,0], [0,1], [0,-1]];
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (searchGrid(grid, row, col, visited, directions)) count++;
    }
  }
  return count;
}

const searchGrid = (grid, row, col, visited, directions) => {
  const rowBound = 0 <= row && row < grid.length;
  const colBound = 0 <= col && col < grid[0].length;
  
  if (!rowBound || !colBound) return false;
  if (grid[row][col] === 'W') return false;
  if (visited.has(`${row}${col}`)) return false;
  visited.add(`${row}${col}`);
  for (let dir of directions) {
    searchGrid(grid, row+dir[0], col+dir[1], visited, directions);
  }
  return true;
}

// use nested loop 
// if we find a L, 
// use dfs to find rest of the islands
// whenever we find an island, 
// increment count by 1, and add L to visited set
// continue nested loop, repeat island process
// once loop is over, we return count. 
// n be number of elements in array
// m be length of the nested array