const largestComponent = (graph) => {
  // todo
  let currMax = 0;
  let globalMax = 0;
  const visited = new Set();
  for (let vertex in graph) {    
    if (!visited.has(vertex)) {
      currMax = 0;
      const stack = [vertex];
      visited.add(vertex);
      while (stack.length > 0) {
        const currNode = stack.pop();
        currMax += 1;
        for (let neighbor of graph[currNode]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor); 
            visited.add(neighbor);
          }
        }
      }
      if (currMax > globalMax) globalMax = currMax;
    } 
  }
  
  return globalMax;
};

