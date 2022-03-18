// const hasPath = (graph, src, dst) => {
//   // todo
//   const stack = [src];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current === dst) return true;
//     for (node of graph[current]) {
//       stack.push(node);
//     }
//   }
//   return false;
// };

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (node of graph[src]) {
    const res = hasPath(graph, node, dst);
    if (res) return true;
  }
  return false;
}