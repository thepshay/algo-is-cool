const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {};
  for (edge of edges) {
    const node1 = edge[0];
    const node2 = edge[1];
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  const stack = [nodeA];
  const visited = new Set();
  while (stack.length > 0) {
    const current = stack.pop();
    visited.add(current);
    if (current === nodeB) return true;
    for (node of graph[current]) {
      if (!visited.has(node)) stack.push(node);
    }
  }
  return false;
};