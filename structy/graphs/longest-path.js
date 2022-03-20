// const longestPath = (graph) => {
//   // todo
//   let maxCount = 0; 
//   Object.keys(graph).forEach(key => {
//     const count = findLongestPathAtNode(graph, key);
//     maxCount = Math.max(maxCount, count)
//   })
//   return maxCount;
// };

// const findLongestPathAtNode = (graph, key) => {
//   const queue = [{node: key, step: 0}];
//   let maxStep = 0;
  
//   while (queue.length > 0) {
//     console.log(queue)
//     const currData = queue.shift();
//     const currNode = currData.node;
//     const currStep = currData.step;
    
//     maxStep = Math.max(currStep, maxStep);
    
//     for (let node of graph[currNode]) {
//       const nextData = {
//         node: node,
//         step: currStep+1
//       }
//       queue.push(nextData);
//     }
//   }
//   return maxStep;
// }

const longestPath = (graph) => {
  const distance = {};
  
  for (let node in graph) {
    if (graph[node].length === 0) distance[node] = 0;
  }
  
  for (let node in graph) {
    findDistance(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
}

const findDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  
  let maxCount = 0;
  for (let neighbor of graph[node]) {
    const length = findDistance(graph, neighbor, distance);
    maxCount = Math.max(maxCount, length);
  }
  
  distance[node] = maxCount + 1;
  return distance[node];
}


// go through every single node of the graph
// perform bfs on the graph 
// record longest path during bfs
// n be number of nodes
// worst case we will traverse every single nodes
// o(n^2)