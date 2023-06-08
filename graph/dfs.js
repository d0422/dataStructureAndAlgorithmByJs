const dfs = (graph, start, visited, result) => {
  result.push(start);
  visited[start] = 1;
  if (!graph[start]) {
    return;
  }
  for (const node of graph[start]) {
    if (!visited[node]) {
      dfs(graph, node, visited, result);
    }
  }
};
const makeVisited = (nodeNumbers) => {
  const visited = [];
  for (let x = 0; x < nodeNumbers; x++) {
    visited.push(0);
  }
  return visited;
};
const input = (graph, nodeNumbers) => {
  const result = [];
  const visited = makeVisited(nodeNumbers);
  dfs(graph, 0, visited, result);
  return result;
};

module.exports = input;
input([[1, 2], [3, 0], [2]], 4);
