const Queue = require('../dataStructure/queue/Queue');

const bfs = (graph, start, nodeNubmers) => {
  const result = [];
  const visited = makeVisited(nodeNubmers);
  result.push(start);
  visited[start] = 1;
  const queue = new Queue();
  queue.inqueue(start);
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    if (graph[currentNode]) {
      for (const node of graph[currentNode]) {
        if (!visited[node]) {
          visited[node] = 1;
          result.push(node);
          queue.inqueue(node);
        }
      }
    }
  }
  return result;
};
const makeVisited = (nodeNumbers) => {
  const visited = [];
  for (let x = 0; x < nodeNumbers; x++) {
    visited.push(0);
  }
  return visited;
};
const bfsInput = (graph, nodeNumbers) => {
  return bfs(graph, 0, nodeNumbers);
};

module.exports = bfsInput;
