const stringSearch = (grid, s) => {
  // todo
  const characters = s.split('');
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (findWord(grid, row, col, characters, 0)) return true;
    }
  }
  return false;
};

const findWord = (grid, row, col, characters, index) => {
  if (!inBound(grid, row, col)) return false;
  if (grid[row][col] !== characters[index]) return false;
  if (index === characters.length - 1) return true;
  
  const char = grid[row][col]
  grid[row][col] = '*';
  
  const directions = [[1,0], [-1,0], [0,1], [0,-1]];
  for (let dir of directions) {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    if (findWord(grid, nextRow, nextCol, characters, index+1)) return true;
  }
  grid[row][col] = char;
  return false;
  
}

const inBound = (grid, row, col) => {
  const boundRow = 0 <= row && row < grid.length;
  const boundCol = 0 <= col && col < grid[0].length;
  return boundRow && boundCol;
}