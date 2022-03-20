const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const queue = [{row: startRow, col: startCol, step: 0}];
  const visited = new Set();
  const directions = [ [1,0], [-1,0], [0,1], [0,-1]];
  while (queue.length > 0) {
    const currData = queue.shift();
    const currRow = currData.row;
    const currCol = currData.col;
    const currStep = currData.step;
    
    if (isValid(grid, currRow, currCol, visited)) {
      if (grid[currRow][currCol] === 'C') return currStep;
      visited.add(`${currRow},${currCol}`);
      for (let dir of directions) {
        const data = {
          row: currRow + dir[0],
          col: currCol + dir[1],
          step: currStep+1
        }
        queue.push(data);
      }
    }    
  }
  return -1;
};

const isValid = (grid, row, col, visited) => {
  const inBoundRow = 0 <= row && row < grid.length;
  const inBoundCol = 0 <= col && col < grid[0].length;
  if (!inBoundRow || !inBoundCol) return false;
  
  if (grid[row][col] === 'X') return false;
  
  if (visited.has(`${row},${col}`)) return false;
  
  return true;
}

// begin at startRow and startCol
// use bfs because we want to expand out from start pos and record layer we expand
// queue will store {node, step}, step will be 0 at starting pos
// each layer of queue if its C return current step
// if O add to queue with step + 1
// if X ignore
// if queue is length 0, there are not more possible steps return -1;
// use visited set, to keep track of visted nodes.
// o(row * col) time
// o(row * col) space