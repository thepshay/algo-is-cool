const safeCracking = (hints) => {
  // todo
  const graph = getGraph(hints);
  const parentCount = getParentCount(graph);
  const order = [];
  for (let node in parentCount) {
    if (parentCount[node] === 0) order.push(node);
  }
  
  const res = [];
  while (order.length > 0) {
    const currNode = order.pop();
    res.push(currNode);
    for (let child of graph[currNode]) {
      parentCount[child] -= 1;
      if (parentCount[child] === 0) order.push(child);
    }
  }
  return res.join('');
};

const getGraph = (hints) => {
  const graph = {};
  for (let edge of hints) {
    const [node1, node2] = edge;
    if (graph[node1] === undefined) graph[node1] = [];
    if (graph[node2] === undefined) graph[node2] = [];
    graph[node1].push(node2);
  }
  return graph;
}

const getParentCount = (graph) => {
  const parentCount = {};
  for (let node in graph) {
    parentCount[node] = 0;
  }
  for (let node in graph) {
    for (let child of graph[node]) {
      parentCount[child] += 1;
    }
  }
  return parentCount;
}
