const topologicalOrder = (graph) => {
  // todo
  const parentCount = {};
  for (let node in graph) {
    if (parentCount[node] === undefined) parentCount[node] = 0
  }
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      parentCount[neighbor] += 1;
    }
  }
  const order = [];
  for (let node in parentCount) {
    if (parentCount[node] === 0) order.push(node);
  }
  
  const res = [];
  while (order.length > 0) {
    const currNode = order.pop();
    res.push(currNode);
    for (let neighbor of graph[currNode]) {
      parentCount[neighbor] -= 1;
      if (parentCount[neighbor] === 0) {
        order.push(neighbor);
      }
    }
  }
  return res;
};
