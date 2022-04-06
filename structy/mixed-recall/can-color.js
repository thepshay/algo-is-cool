const canColor = (graph) => {
  // todo
  const color = {};
  
  for (let node in graph) {
    if( !(node in color) && !validateColor(node, graph, color, true)) return false;
  }
  return true;  
};

const validateColor = (node, graph, color, currentColor) => {
  if (node in color) return color[node] === currentColor;
  
  color[node] = currentColor;
  
  for (let neighbor of graph[node]) {
    if (!validateColor(neighbor, graph, color, !currentColor)) return false;
  }
  return true;
}