const semestersRequired = (numCourses, prereqs) => {
  // todo
  console.log('ffsdsd')
  if (prereqs.length === 0) return 1;
  const graph = {};
  for (let edge of prereqs) {
    const node1 = edge[0];
    const node2 = edge[1];
    
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
  }
  
  return longestPath(graph);
};

const longestPath = (graph) => {
  const distance = {};
  for (node in graph) {
    if (graph[node].length === 0) distance[node]=1;
  }

  for (node in graph) {
    findLongestPathLength(graph, node, distance);
  }
  console.log(distance)
  return Math.max(...Object.values(distance));
}

const findLongestPathLength = (graph, node, distance) => {
  if (node in distance) return distance[node];
  
  let maxLength = 0;
  for (neighbor of graph[node]) {
    const length = findLongestPathLength(graph, neighbor, distance);
    maxLength = Math.max(length, maxLength);
  }
  distance[node] = maxLength+1;
  return distance[node];
}



// convert to adjacency list form to graph
// loop through each node of graph
// find the longest path of the graph
// return longest path

