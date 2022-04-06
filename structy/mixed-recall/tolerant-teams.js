const tolerantTeams = (rivalries) => {
  // todo
  const graph = {};
  for (let rival of rivalries) {
    const rival1 = rival[0];
    const rival2 = rival[1];
    
    if (!(rival1 in graph)) graph[rival1] = [];
    if (!(rival2 in graph)) graph[rival2] = [];
    
    graph[rival1].push(rival2);
    graph[rival2].push(rival1);
  }
  const color = {};
  
  for (let player in graph) {
    if (!(player in color) && !valid(player, graph, color, true)) return false;
  }
  return true;
};

const valid = (player, graph, color, currentColor) => {
  if (player in color) return color[player] === currentColor;
  color[player] = currentColor;
  for (let neighbor of graph[player]) {
    if (!valid(neighbor, graph, color, !currentColor)) return false;
  }
  return true;
}