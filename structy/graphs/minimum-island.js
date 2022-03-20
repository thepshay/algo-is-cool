const minimumIsland = (grid) => {
  // todo
  let minCount = Infinity;
  const directions = [ [1, 0], [-1,0], [0, 1], [0, -1]];
  const visited = new Set(); 
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const currCount = countIsland(grid, row, col, visited, directions);
      if (currCount > 0 && currCount < minCount) minCount = currCount;
    }
  }
  return minCount;
};

const countIsland = (grid, row, col, visited, directions) => {
  const inBoundRow = 0 <= row && row < grid.length;
  const inBoundCol = 0 <= col && col < grid[0].length;
  if (!inBoundRow || !inBoundCol) return 0;
  
  if (grid[row][col] === 'W') return 0;
  
  if (visited.has(`${row},${col}`)) return 0;
  visited.add(`${row},${col}`);
  
  let count = 1;
  for (let dir of directions) {
    count += countIsland(grid, row+dir[0], col+dir[1], visited, directions)
  }
  return count;
}


// use nested loop to find L
// when find L, perform dfs to find size of island 
// during search add L position to visited set
// count nulber of L in current island
// compare currIslandCount to maxCount, replace maxCount if currCount is bigger
// return maxCount
// o(row * col) time
// o(row * col) space
