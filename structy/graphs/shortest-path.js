const shortestPath = (edges, nodeA, nodeB) => {
  const graph = convertToGraph(edges);
  return getSortestPath(graph, nodeA, nodeB);
};

const convertToGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const node1 = edge[0];
    const node2 = edge[1];
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}

const getSortestPath = (graph, nodeA, nodeB) => {
  if (nodeA === nodeB) return 0;
  let count = 0;
  const queue = [{node: nodeA, distance: 0}];
  const visited = new Set()
  while (queue.length > 0) {
    const curr = queue.shift();
    visited.add(curr.node)
    if (curr.node === nodeB) return curr.distance;
    
    for (node of graph[curr.node]) {
      if (!visited.has(node)) queue.push({node, distance: curr.distance+1})
    }
  }
  return -1;
}
