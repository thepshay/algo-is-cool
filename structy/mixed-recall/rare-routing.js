const rareRouting = (n, roads) => {
  // todo
  const graph = {};
  for (let road of roads) {
    const node1 = road[0];
    const node2 = road[1];
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(String(node2));
    graph[node2].push(String(node1));
  }
  const visited = new Set();
  if (!valid(graph, '0', visited, null)) return false;
  console.log(visited)
  return visited.size === n;
};

const valid = (graph, node, visited, prevNode) => {
  if (visited.has(node)) return false;
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (neighbor !== prevNode) {
      if (!valid(graph, neighbor, visited, node)) return false; 
    }
  }
  return true;
}