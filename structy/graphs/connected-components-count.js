const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let count = 0;
  for (let vertex in graph) {
    
    if (!visited.has(parseInt(vertex))) {
      count++;
      // console.log(count, visited)
      const stack = [vertex];
      
      while (stack.length > 0) {
        const current = stack.pop();
        visited.add(current);
        for (let node of graph[current]) {
          if (!visited.has(node)) stack.push(node);
        }
      }
    }
  }
  return count;
};
